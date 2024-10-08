// @ts-ignore
import { NeverChangeDB } from 'neverchange';
import {
  createChildTodoInDB,
  createProjectInDB,
  CreateProjectInDBRow,
  createTodoInDB,
  deleteProjectInDB,
  deleteProjectTodosInDB,
  deleteTodoInDB,
  getChildTodosInDB,
  getProjectsInDB,
  getTodosInDB,
  moveTodoInDB,
  toggleTodoInDB,
  updateTodoInDB,
} from './db/query_sql';

let db: any = null;
const DB_NAME = 'mytodolist';

export async function initDb() {
  if (db) return db;

  db = new NeverChangeDB(DB_NAME);

  db.addMigrations([
    {
      version: 1,
      up: async (db: any) => {
        await db.execute(`
          CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
          )
        `);

        await db.execute(`
          CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            project_id INTEGER,
            parent_id INTEGER,
            text TEXT NOT NULL,
            completed BOOLEAN NOT NULL DEFAULT 0,
            deleted BOOLEAN NOT NULL DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (project_id) REFERENCES projects(id),
            FOREIGN KEY (parent_id) REFERENCES todos(id)
          )
        `);
      },
    },
  ]);

  await db.init();
  return db;
}

export async function addProject(
  name: string,
): Promise<CreateProjectInDBRow | null> {
  try {
    const newProject = await createProjectInDB(db, { name });
    console.log('Project added successfully');
    return newProject;
  } catch (error) {
    console.error('Failed to add project:', error);
    throw error;
  }
}

export async function getProjects() {
  const rows = await getProjectsInDB(db);
  return rows || [];
}

export async function addTodo(
  text: string,
  projectId: number,
  parentId: number | null = null,
) {
  try {
    if (parentId) {
      await createChildTodoInDB(db, { text, projectId, parentId });
    } else {
      await createTodoInDB(db, { text, projectId });
    }

    console.log('Todo added successfully');
    return;
  } catch (error) {
    console.error('Failed to add todo:', error);
    throw error;
  }
}

export async function getTodos(projectId: number | null = null) {
  const rows = await getTodosInDB(db, { projectId });
  return rows || [];
}

export async function deleteTodo(id: number) {
  try {
    // 再帰的に子TODOを削除
    const childTodos = await getChildTodosInDB(db, {
      projectId: null,
      parentId: id,
    });
    db.query('SELECT id FROM todos WHERE parent_id = ?', [id]);
    for (const childTodo of childTodos) {
      await deleteTodoInDB(db, { id: childTodo.id });
    }

    // このTODOを削除
    await deleteTodoInDB(db, { id });
    console.log('Todo and its subtasks marked as deleted successfully');
  } catch (error) {
    console.error('Failed to mark todo as deleted:', error);
    throw error;
  }
}

export async function toggleTodo(id: number) {
  await toggleTodoInDB(db, { id });
}

export async function updateTodo(id: number, text: string) {
  try {
    await updateTodoInDB(db, { id, text });
    console.log('Todo updated successfully');
  } catch (error) {
    console.error('Failed to update todo:', error);
    throw error;
  }
}

export async function moveTodo(
  id: number,
  newProjectId: number | null,
  newParentId: number | null,
) {
  try {
    await moveTodoInDB(db, {
      id,
      projectId: newProjectId,
      parentId: newParentId,
    });
    console.log('Todo moved successfully');
  } catch (error) {
    console.error('Failed to move todo:', error);
    throw error;
  }
}

export async function deleteProject(id: number) {
  try {
    // プロジェクトに関連するすべてのTODOを削除
    await deleteProjectTodosInDB(db, { projectId: id });

    // プロジェクトを削除
    await deleteProjectInDB(db, { id });

    console.log('Project and related todos deleted successfully');
  } catch (error) {
    console.error('Failed to delete project:', error);
    throw error;
  }
}

export async function exportCSV() {
  try {
    const projectsCSVContent = await db.dumpTableToCSV('projects');
    const todosCSVContent = await db.dumpTableToCSV('todos');

    // download projects data
    const projectsBlob = new Blob([projectsCSVContent], { type: 'text/csv' });
    const projectsUrl = URL.createObjectURL(projectsBlob);
    const projectsLink = document.createElement('a');
    projectsLink.href = projectsUrl;
    projectsLink.download = 'projects_data.csv';
    projectsLink.click();

    // download todos data
    const todosBlob = new Blob([todosCSVContent], { type: 'text/csv' });
    const todosUrl = URL.createObjectURL(todosBlob);
    const todosLink = document.createElement('a');
    todosLink.href = todosUrl;
    todosLink.download = 'todos_data.csv';
    todosLink.click();

    URL.revokeObjectURL(projectsUrl);
    URL.revokeObjectURL(todosUrl);
  } catch (error) {
    console.error('Failed to export CSV:', error);
  }
}

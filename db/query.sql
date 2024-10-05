-- name: CreateProjectInDB :one
INSERT INTO projects (name) VALUES (?) RETURNING *;

-- name: GetProjectsInDB :many
SELECT * FROM projects ORDER BY created_at DESC;

-- name: GetProjectInDB :one
SELECT * FROM projects WHERE id = ? LIMIT 1;

-- name: UpdateProjectInDB :exec
UPDATE projects SET name = ? WHERE id = ?;

-- name: DeleteProjectInDB :exec
DELETE FROM projects WHERE id = ?;

-- name: CreateTodoInDB :exec
INSERT INTO todos (text, project_id) VALUES (?, ?);

-- name: CreateChildTodoInDB :exec
INSERT INTO todos (text, project_id, parent_id) VALUES (?, ?, ?);

-- name: GetTodosInDB :many
SELECT * FROM todos WHERE project_id = ? AND deleted = 0 ORDER BY created_at DESC;

-- name: GetChildTodosInDB :many
SELECT * FROM todos WHERE project_id = ? AND parent_id = ? AND deleted = 0 ORDER BY created_at DESC;

-- name: GetTodoInDB :one
SELECT * FROM todos WHERE id = ? LIMIT 1;

-- name: ToggleTodoInDB :exec
UPDATE todos SET completed = NOT completed WHERE id = ?;

-- name: UpdateTodoInDB :exec
UPDATE todos SET text = ? WHERE id = ?;

-- name: MoveTodoInDB :exec
UPDATE todos SET project_id = ?, parent_id = ? WHERE id = ?;

-- name: DeleteTodoInDB :exec
UPDATE todos SET deleted = 1 WHERE id = ?;

-- name: DeleteProjectTodosInDB :exec
UPDATE todos SET deleted = 1 WHERE project_id = ?;
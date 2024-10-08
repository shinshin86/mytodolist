import { useEffect, useState, useCallback } from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Select,
  Container,
  Text,
  Menu,
  MenuButton,
  Avatar,
  IconButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';
import theme from './theme';
import { AddProject } from './AddProject';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';
import { ProjectList } from './ProjectList';
import {
  initDb,
  getProjects,
  getTodos,
  addProject,
  toggleTodo,
  updateTodo,
  deleteTodo,
  deleteProject,
  addTodo,
  exportCSV,
} from './db';
import { ExportDialog } from './ExportDialog';
import { SettingDialog } from './SettingDialog';
import { getUserSettings } from './userSettings';
import { format } from 'date-fns';

export function App() {
  const [isDbReady, setIsDbReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [todos, setTodos] = useState<any[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    () => {
      const storedProjectId = localStorage.getItem('selectedProjectId');
      return storedProjectId ? Number(storedProjectId) : null;
    },
  );
  const [isExportDialogOpen, setExportDialogOpen] = useState(false);

  const today = format(new Date(), 'yyyy-MM-dd');

  const fetchProjects = useCallback(async () => {
    try {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);

      // check for autoCreateDailyProject
      const settings = getUserSettings();
      if (settings.autoCreateDailyProject) {
        const todayProjectExists = fetchedProjects.some(
          (project) => project.name === today,
        );

        if (!todayProjectExists) {
          const newProjectId = await addProject(today);
          fetchProjects();

          if (newProjectId) {
            handleSelectProjectId(Number(newProjectId.id));
          }
        }
      }
    } catch (err) {
      console.error('Failed to fetch projects:', err);
      setError(
        'Failed to fetch projects. Please check the console for more details.',
      );
    }
  }, []);

  const fetchTodos = useCallback(async () => {
    try {
      const fetchedTodos = await getTodos(selectedProjectId);
      setTodos(fetchedTodos);
    } catch (err) {
      console.error('Failed to fetch todos:', err);
      setError(
        'Failed to fetch todos. Please check the console for more details.',
      );
    }
  }, [selectedProjectId]);

  const handleAddProject = async (name: string) => {
    await addProject(name);
    const projects = await getProjects();
    const newProject = projects.find((project) => project.name === name);
    handleSelectProjectId(newProject?.id || null);
    fetchProjects();
  };

  const handleSelectProjectId = useCallback((projectId: number | null) => {
    setSelectedProjectId(projectId);
    if (projectId !== null) {
      localStorage.setItem('selectedProjectId', String(projectId));
    } else {
      localStorage.removeItem('selectedProjectId');
    }
  }, []);

  const handleDeleteProject = async (id: number) => {
    await deleteProject(id);
    fetchProjects();
    fetchTodos();
  };

  const handleToggleTodo = useCallback(
    async (id: number) => {
      await toggleTodo(id);
      fetchTodos();
    },
    [fetchTodos],
  );

  const handleAddTodo = useCallback(
    async (
      text: string,
      selectedProjectId: number,
      parentId: number | null,
    ) => {
      await addTodo(text, selectedProjectId, parentId);
      fetchTodos();
    },
    [fetchTodos],
  );

  const handleUpdateTodo = useCallback(
    async (id: number, text: string) => {
      await updateTodo(id, text);
      fetchTodos();
    },
    [fetchTodos],
  );

  const handleDeleteTodo = useCallback(
    async (id: number) => {
      await deleteTodo(id);
      fetchTodos();
    },
    [fetchTodos],
  );

  useEffect(() => {
    initDb()
      .then(() => {
        setIsDbReady(true);
        fetchProjects();
      })
      .catch((err) => {
        console.error('Database initialization failed:', err);
        setError(
          'Failed to initialize the database. Please check the console for more details.',
        );
      });
  }, [fetchProjects]);

  useEffect(() => {
    if (isDbReady && selectedProjectId) {
      fetchTodos();
    }
  }, [isDbReady, selectedProjectId, fetchTodos]);

  if (error) {
    return (
      <Box
        color="red.500"
        p={4}
        borderRadius="md"
        bg="red.100"
        width="100%"
        textAlign="center"
      >
        <Text fontWeight="bold">{error}</Text>
      </Box>
    );
  }

  if (!isDbReady) {
    return (
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Text fontSize="xl">Loading...</Text>
      </Flex>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Box minHeight="100vh">
        <Box boxShadow="sm" position="sticky" top={0} zIndex={1}>
          <Container maxWidth="container.lg" py={4}>
            <Flex justifyContent="space-between" alignItems="center">
              <Heading size="lg">My TODO List</Heading>
              <Flex alignItems="center">
                <Select
                  placeholder="Select project"
                  value={selectedProjectId || ''}
                  onChange={(e) =>
                    handleSelectProjectId(Number(e.target.value))
                  }
                  width="200px"
                  mr={2}
                >
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.name}
                    </option>
                  ))}
                </Select>
                <Menu>
                  <MenuButton
                    as={IconButton}
                    aria-label="User menu"
                    icon={<Avatar size="sm" />}
                    variant="ghost"
                    ml={4}
                  />
                  <MenuList>
                    <MenuItem
                      icon={<DownloadIcon />}
                      onClick={() => setExportDialogOpen(true)}
                    >
                      Export CSV
                    </MenuItem>
                    <SettingDialog />
                  </MenuList>
                </Menu>
              </Flex>
            </Flex>
          </Container>
        </Box>

        <Container maxWidth="container.lg" py={8}>
          <Tabs variant="enclosed" colorScheme="blue">
            <TabList mb={4}>
              <Tab>TODOs</Tab>
              <Tab>Projects</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <VStack spacing={6} align="stretch">
                  {selectedProjectId && (
                    <AddTodo
                      onAdd={handleAddTodo}
                      selectedProjectId={selectedProjectId}
                      projectId={selectedProjectId}
                    />
                  )}
                  <Box borderWidth={1} borderRadius="md" overflow="hidden">
                    <TodoList
                      todos={todos}
                      onToggle={handleToggleTodo}
                      onUpdate={handleUpdateTodo}
                      onDelete={handleDeleteTodo}
                      onAdd={handleAddTodo}
                      selectedProjectId={selectedProjectId}
                    />
                  </Box>
                </VStack>
              </TabPanel>
              <TabPanel>
                <VStack spacing={6} align="stretch">
                  <AddProject
                    onAdd={(name) => {
                      handleAddProject(name);
                    }}
                  />
                  <Box borderWidth={1} borderRadius="md" overflow="hidden">
                    <ProjectList
                      projects={projects}
                      selectedProjectId={selectedProjectId}
                      onDelete={handleDeleteProject}
                      onSelect={handleSelectProjectId}
                    />
                  </Box>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
      <ExportDialog
        isOpen={isExportDialogOpen}
        onClose={() => setExportDialogOpen(false)}
        onExport={() => {
          exportCSV();
          setExportDialogOpen(false);
        }}
      />
    </ChakraProvider>
  );
}

export default App;

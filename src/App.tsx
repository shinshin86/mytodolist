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
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
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
} from './db';

export function App() {
  const [isDbReady, setIsDbReady] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [projects, setProjects] = useState<any[]>([]);
  const [todos, setTodos] = useState<any[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(
    null,
  );

  // colors
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const headerBgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const fetchProjects = useCallback(async () => {
    try {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
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
    setSelectedProjectId(newProject?.id || '');
    fetchProjects();
  };

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
    <ChakraProvider>
      <Box minHeight="100vh" bg={bgColor}>
        <Box
          bg={headerBgColor}
          boxShadow="sm"
          position="sticky"
          top={0}
          zIndex={1}
        >
          <Container maxWidth="container.lg" py={4}>
            <Flex justifyContent="space-between" alignItems="center">
              <Heading size="lg">My TODO List</Heading>
              <Flex alignItems="center">
                <Select
                  placeholder="Select project"
                  value={selectedProjectId || ''}
                  onChange={(e) => setSelectedProjectId(Number(e.target.value))}
                  width="200px"
                  mr={2}
                >
                  {projects.map((project) => (
                    <option key={project.id} value={project.id}>
                      {project.name}
                    </option>
                  ))}
                </Select>
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
                  <Box
                    borderWidth={1}
                    borderColor={borderColor}
                    borderRadius="md"
                    overflow="hidden"
                  >
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
                  <Box
                    borderWidth={1}
                    borderColor={borderColor}
                    borderRadius="md"
                    overflow="hidden"
                  >
                    <ProjectList
                      projects={projects}
                      selectedProjectId={selectedProjectId}
                      onDelete={handleDeleteProject}
                      onSelect={setSelectedProjectId}
                    />
                  </Box>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;

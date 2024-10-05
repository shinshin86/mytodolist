import React, { useMemo, useState } from 'react';
import {
  VStack,
  HStack,
  Text,
  Checkbox,
  Input,
  Button,
  Box,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Collapse,
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronRightIcon, AddIcon } from '@chakra-ui/icons';

interface Todo {
  id: number;
  text: string;
  completed: number;
  project_id: number;
  parent_id: number | null;
  children?: Todo[];
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: number) => Promise<void>;
  onUpdate: (id: number, text: string) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  onAdd: (
    text: string,
    selectedProjectId: number,
    parentId: number | null,
  ) => Promise<void>;
  selectedProjectId: number | null;
}

function TodoItem({
  todo,
  onToggle,
  onUpdate,
  onDelete,
  onAdd,
  level = 0,
  selectedProjectId,
}: {
  todo: Todo;
  onToggle: (id: number) => Promise<void>;
  onUpdate: (id: number, text: string) => Promise<void>;
  onDelete: (id: number) => Promise<void>;
  onAdd: (
    text: string,
    selectedProjectId: number,
    parentId: number | null,
  ) => Promise<void>;
  level: number;
  selectedProjectId: number | null;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const [isExpanded, setIsExpanded] = useState(true);
  const [newChildText, setNewChildText] = useState('');
  const [isAddingChild, setIsAddingChild] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  const handleUpdate = async () => {
    await onUpdate(todo.id, editText);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    await onDelete(todo.id);
    onClose();
  };

  const handleAddChild = async () => {
    if (!selectedProjectId) {
      throw new Error('No project selected');
    }

    if (newChildText.trim()) {
      await onAdd(newChildText, selectedProjectId, todo.id);
      setNewChildText('');
      setIsAddingChild(false);
    }
  };

  return (
    <Box
      borderLeft={level > 0 ? '1px solid' : 'none'}
      borderColor="gray.200"
      pl={level > 0 ? 4 : 0}
      mb={2}
    >
      <HStack spacing={2} p={2} borderRadius="md" boxShadow="sm">
        {(todo.children && todo.children.length > 0) || level > 0 ? (
          <Button
            size="sm"
            variant="ghost"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label={isExpanded ? 'Collapse' : 'Expand'}
          >
            {isExpanded ? <ChevronDownIcon /> : <ChevronRightIcon />}
          </Button>
        ) : (
          <Box w={8} /> // Spacer for alignment
        )}
        <Checkbox
          isChecked={todo.completed === 1}
          onChange={() => onToggle(todo.id)}
          colorScheme="green"
        />
        {isEditing ? (
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleUpdate}
            onKeyPress={(e) => e.key === 'Enter' && handleUpdate()}
          />
        ) : (
          <Text flex={1} onClick={() => setIsEditing(true)}>
            {todo.text}
          </Text>
        )}
        <Button size="sm" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Save' : 'Edit'}
        </Button>
        <Button size="sm" colorScheme="red" onClick={onOpen}>
          Delete
        </Button>
        <Button
          size="sm"
          leftIcon={<AddIcon />}
          onClick={() => setIsAddingChild(!isAddingChild)}
        >
          Add Subtask
        </Button>
      </HStack>

      <Collapse in={isExpanded} animateOpacity>
        <VStack align="stretch" ml={4} mt={2} spacing={2}>
          {todo.children &&
            todo.children.map((childTodo) => (
              <TodoItem
                key={childTodo.id}
                todo={childTodo}
                onToggle={onToggle}
                onUpdate={onUpdate}
                onDelete={onDelete}
                onAdd={onAdd}
                level={level + 1}
                selectedProjectId={selectedProjectId}
              />
            ))}
        </VStack>
      </Collapse>

      <Collapse in={isAddingChild} animateOpacity>
        <HStack mt={2} ml={4}>
          <Input
            placeholder="New subtask"
            value={newChildText}
            onChange={(e) => setNewChildText(e.target.value)}
          />
          <Button onClick={handleAddChild}>Add</Button>
          <Button onClick={() => setIsAddingChild(false)}>Cancel</Button>
        </HStack>
      </Collapse>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Todo
            </AlertDialogHeader>
            <AlertDialogBody>
              Are you sure you want to delete this todo and all its subtasks?
              This action cannot be undone.
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}

export function TodoList({
  todos,
  onToggle,
  onUpdate,
  onDelete,
  onAdd,
  selectedProjectId,
}: TodoListProps) {
  const hierarchicalTodos = useMemo(() => {
    const todoMap = new Map<number, Todo>();
    const rootTodos: Todo[] = [];

    todos.forEach((todo) => {
      todoMap.set(todo.id, { ...todo, children: [] });
    });

    todos.forEach((todo) => {
      if (todo.parent_id === null) {
        rootTodos.push(todoMap.get(todo.id)!);
      } else {
        const parent = todoMap.get(todo.parent_id);
        if (parent) {
          parent.children = parent.children || [];
          parent.children.push(todoMap.get(todo.id)!);
        }
      }
    });

    return rootTodos;
  }, [todos]);

  if (selectedProjectId === null) {
    return (
      <Box p={4} borderRadius="md">
        <Text>Please select a project to view and manage todos.</Text>
      </Box>
    );
  }

  return (
    <VStack align="stretch" spacing={4} width="100%">
      {hierarchicalTodos.length > 0 ? (
        hierarchicalTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onUpdate={onUpdate}
            onDelete={onDelete}
            onAdd={onAdd}
            level={0}
            selectedProjectId={selectedProjectId}
          />
        ))
      ) : (
        <Box p={4} borderRadius="md">
          <Text>
            No todos found for this project. Start by adding a new todo!
          </Text>
        </Box>
      )}
    </VStack>
  );
}

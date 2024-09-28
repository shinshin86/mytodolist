import React, { useState } from 'react';
import { Input, Button, HStack, useToast } from '@chakra-ui/react';

interface AddTodoProps {
  onAdd: (
    text: string,
    selectedProjectId: number,
    parentId: number | null,
  ) => void;
  selectedProjectId: number | null;
  projectId: number | null;
}

export function AddTodo({ onAdd, selectedProjectId }: AddTodoProps) {
  const [text, setText] = useState('');
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!selectedProjectId) {
        throw new Error('No project selected');
      }

      await onAdd(text, selectedProjectId, null);
      setText('');
      toast({
        title: 'Todo added.',
        description: `"${text}" has been added successfully.`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Failed to add todo:', error);
      toast({
        title: 'Error',
        description: 'Failed to add todo. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack>
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new todo"
          isDisabled={selectedProjectId === null}
        />
        <Button
          type="submit"
          colorScheme="blue"
          isDisabled={selectedProjectId === null}
        >
          Add
        </Button>
      </HStack>
    </form>
  );
}

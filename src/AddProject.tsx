import React, { useState } from 'react';
import { Input, Button, HStack, VStack, useToast } from '@chakra-ui/react';

interface AddProjectProps {
  onAdd: (name: string) => void;
}

export function AddProject({ onAdd }: AddProjectProps) {
  const [name, setName] = useState('');
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      try {
        await onAdd(name);
        setName('');
        toast({
          title: 'Project created.',
          description: `"${name}" has been added successfully.`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        toast({
          title: 'Error',
          description: 'Failed to create project. Please try again.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <VStack spacing={4} align="stretch">
        <HStack>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter project name"
          />
          <Button type="submit" colorScheme="green">
            Add Project
          </Button>
        </HStack>
      </VStack>
    </form>
  );
}

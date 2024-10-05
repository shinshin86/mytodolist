import React, { useState } from 'react';
import {
  VStack,
  HStack,
  Text,
  Button,
  Box,
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from '@chakra-ui/react';

interface Project {
  id: number;
  name: string;
}

interface ProjectListProps {
  projects: Project[];
  onSelect: (projectId: number) => void;
  selectedProjectId: number | null;
  onDelete: (id: number) => void;
}

export function ProjectList({ projects, onDelete }: ProjectListProps) {
  const [projectToDelete, setProjectToDelete] = useState<Project | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  const handleDeleteClick = (project: Project) => {
    setProjectToDelete(project);
    onOpen();
  };

  const handleDeleteConfirm = () => {
    if (projectToDelete) {
      onDelete(projectToDelete.id);
    }
    onClose();
  };

  return (
    <VStack align="stretch" spacing={4} width="100%">
      {projects.length === 0 ? (
        <Box p={4} borderRadius="md">
          <Text>No projects found. Start by creating a new project!</Text>
        </Box>
      ) : (
        projects.map((project) => (
          <HStack
            key={project.id}
            p={2}
            borderRadius="md"
            justifyContent="space-between"
          >
            <Text>{project.name}</Text>
            <HStack>
              <Button
                onClick={() => handleDeleteClick(project)}
                colorScheme="red"
                size="sm"
              >
                Delete
              </Button>
            </HStack>
          </HStack>
        ))
      )}

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Project
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure you want to delete the project "
              {projectToDelete?.name}"? This action cannot be undone.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDeleteConfirm} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </VStack>
  );
}

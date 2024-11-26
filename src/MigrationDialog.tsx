import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Spinner,
  VStack,
  Input,
} from '@chakra-ui/react';
import { useState } from 'react';
import { restoreFromBackup, uploadToCloud } from './data-migration';

export const MigrationDialog: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [fileId, setFileId] = useState<string>('');

  const handleMigration = async () => {
    setIsLoading(true);
    setMessage(null);

    try {
      const fileId = await uploadToCloud();
      setMessage(`Migration successful! File ID: ${fileId}`);
    } catch (error) {
      console.error('Migration failed:', error);
      setMessage('Migration failed. Please check the console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRestore = async () => {
    setIsLoading(true);
    setMessage(null);

    try {
      if (!fileId.trim()) {
        throw new Error('File ID is required for restore.');
      }
      await restoreFromBackup(fileId);
      setMessage(`Restore successful for File ID: ${fileId}`);
    } catch (error) {
      console.error('Restore failed:', error);
      setMessage('Restore failed. Please check the console for details.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Data Migration</ModalHeader>
        <ModalBody>
          {isLoading ? (
            <Spinner size="lg" />
          ) : (
            <VStack spacing={4} align="stretch">
              {message ? (
                <Text>{message}</Text>
              ) : (
                <>
                  <Text>Would you like to migrate your data to the cloud?</Text>
                  <Input
                    placeholder="Enter File ID to restore"
                    value={fileId}
                    onChange={(e) => setFileId(e.target.value)}
                    isDisabled={isLoading}
                  />
                </>
              )}
            </VStack>
          )}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} mr={3} isDisabled={isLoading}>
            Close
          </Button>
          <Button
            colorScheme="blue"
            onClick={handleMigration}
            isLoading={isLoading}
            mr={3}
          >
            Migrate
          </Button>
          <Button
            colorScheme="green"
            onClick={handleRestore}
            isDisabled={isLoading || !fileId.trim()}
          >
            Restore
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

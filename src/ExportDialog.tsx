import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
} from '@chakra-ui/react';

interface ExportDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onExport: () => void;
}

export function ExportDialog({ isOpen, onClose, onExport }: ExportDialogProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Export CSV Data</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            By clicking "Export", you will download a CSV file containing all
            the data stored in the database. This includes all projects, todos,
            and other relevant information.
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            onClick={() => {
              onExport();
            }}
          >
            Export
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

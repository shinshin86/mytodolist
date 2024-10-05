import { SettingsIcon } from '@chakra-ui/icons';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Switch,
  FormControl,
  FormLabel,
  useColorMode,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { UserSetting, getUserSettings, saveUserSettings } from './userSettings';

export const SettingDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const [autoCreateEnabled, setAutoCreateEnabled] = useState(false);

  const handleToggleAutoCreate = () => {
    const newValue = !autoCreateEnabled;
    setAutoCreateEnabled(newValue);
    saveUserSettings({ autoCreateDailyProject: newValue });
  };

  useEffect(() => {
    const settings: UserSetting = getUserSettings();
    if (settings.autoCreateDailyProject !== undefined) {
      setAutoCreateEnabled(settings.autoCreateDailyProject);
    }
  }, []);

  return (
    <>
      <Button onClick={onOpen} leftIcon={<SettingsIcon />} variant="ghost">
        Settings
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" alignItems="center" mb={4}>
              <FormLabel htmlFor="dark-mode-switch" mb="0">
                Dark Mode
              </FormLabel>
              <Switch
                id="dark-mode-switch"
                isChecked={colorMode === 'dark'}
                onChange={toggleColorMode}
              />
            </FormControl>
            <FormControl display="flex" alignItems="center" mb={4}>
              <FormLabel htmlFor="auto-project-switch" mb="0">
                Auto-create Daily Project
              </FormLabel>
              <Switch
                id="auto-project-switch"
                isChecked={autoCreateEnabled}
                onChange={handleToggleAutoCreate}
              />
            </FormControl>
            <Text fontSize="sm" color="gray.500" mb={4}>
              Automatically create a project for the current date when the day
              changes. You can enable this option if you want to create daily
              projects automatically.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

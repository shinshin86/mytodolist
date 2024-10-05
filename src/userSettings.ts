const SETTINGS_KEY = 'userSettings';

export type UserSetting = {
  autoCreateDailyProject?: boolean;
};

export const getUserSettings = (): UserSetting => {
  const storedSettings = localStorage.getItem(SETTINGS_KEY);
  return storedSettings ? JSON.parse(storedSettings) : {};
};

// ユーザー設定を保存する関数
export const saveUserSettings = (newSettings: UserSetting) => {
  const currentSettings = getUserSettings();
  const updatedSettings = { ...currentSettings, ...newSettings };
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(updatedSettings));
};

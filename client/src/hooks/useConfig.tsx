import { ConfigModal } from '@interfaces/config';
import { UserModel } from '@interfaces/user';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ConfigContextData {
  setUser: (user: UserModel) => void;
  unsetUser: () => void;
  user?: UserModel;
  getAcessibility: () => ConfigModal['acessibility'];
}

interface ConfigProviderProps {
  children: ReactNode;
}

const ConfigContext = createContext<ConfigContextData>({} as ConfigContextData);

const CONFIG_KEY = '@JOGOS_INCLUSIVOS:config';

const initialValue: ConfigModal = {
  acessibility: {
    libras: true,
  },
  user: undefined,
  users: [],
};

const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const [config, setConfig] = useState<ConfigModal>(() => {
    const storedValue = localStorage.getItem(CONFIG_KEY);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
  }, [config]);

  const verifyIsUserExists = (user: UserModel) => {
    return config.users?.find(
      (u) => u.name === user.name && u.age === user.age
    );
  };

  const getAcessibility = () => {
    return config.acessibility;
  };

  const setUser = (user: UserModel) => {
    const existsUser = verifyIsUserExists(user);
    if (existsUser) {
      setConfig({ ...config, user });
      return;
    }

    const oldUsers = config?.users ?? [];
    const users = [...oldUsers, user];
    setConfig({ ...config, user, users });
  };

  const unsetUser = () => {
    setConfig({ ...config, user: undefined });
  };

  return (
    <ConfigContext.Provider
      value={{ setUser, unsetUser, getAcessibility, user: config?.user }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

function useConfig(): ConfigContextData {
  const context = useContext(ConfigContext);

  if (!context) {
    throw new Error('useLessonOne must be used within an LessonOneProvider');
  }

  return context;
}

export { ConfigProvider, useConfig };

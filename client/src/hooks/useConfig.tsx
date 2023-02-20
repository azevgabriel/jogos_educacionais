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
  getLibras: () => boolean;
  setLibras: (value: boolean) => void;
}

interface ConfigProviderProps {
  children: ReactNode;
}

const ConfigContext = createContext<ConfigContextData>({} as ConfigContextData);

const CONFIG_KEY = '@JOGOS_INCLUSIVOS:config';

const initialValue: ConfigModal = {
  acessibility: {
    libras: false,
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

  const getLibras = () => {
    return config?.acessibility?.libras ?? false;
  };

  const setLibras = (value: boolean) => {
    setConfig({ ...config, acessibility: { libras: value } });
  };

  return (
    <ConfigContext.Provider
      value={{
        setUser,
        unsetUser,
        getLibras,
        setLibras,
        user: config?.user,
      }}
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

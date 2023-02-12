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
  getUser: () => UserModel | undefined;
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
};

const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const [config, setConfig] = useState<ConfigModal>(() => {
    const storedValue = localStorage.getItem(CONFIG_KEY);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
  }, [config]);

  const getAcessibility = () => {
    return config.acessibility;
  };

  const setUser = (user: ConfigModal['user']) => {
    setConfig({ ...config, user });
  };

  const getUser = () => {
    return config.user;
  };

  return (
    <ConfigContext.Provider value={{ setUser, getAcessibility, getUser }}>
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

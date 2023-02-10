import { ConfigModal } from '@interfaces/config';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ConfigContextData {
  config?: ConfigModal;
  setConfig: (config: ConfigModal) => void;
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

  return (
    <ConfigContext.Provider value={{ config, setConfig, getAcessibility }}>
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

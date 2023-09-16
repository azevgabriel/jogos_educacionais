import { ConfigModal } from '@interfaces/config';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ConfigContextData {
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
};

const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const [config, setConfig] = useState<ConfigModal>(() => {
    const storedValue = localStorage.getItem(CONFIG_KEY);
    return storedValue !== null ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(CONFIG_KEY, JSON.stringify(config));
  }, [config]);

  const getLibras = () => {
    return config?.acessibility?.libras ?? false;
  };

  const setLibras = (value: boolean) => {
    setConfig({ ...config, acessibility: { libras: value } });
  };

  return (
    <ConfigContext.Provider
      value={{
        getLibras,
        setLibras,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

function useConfig(): ConfigContextData {
  const context = useContext(ConfigContext);

  if (!context) {
    throw new Error('useConfig must be used within an ConfigContextProvider');
  }

  return context;
}

export { ConfigProvider, useConfig };

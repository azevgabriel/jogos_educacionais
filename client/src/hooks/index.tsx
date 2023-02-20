import { ReactNode } from 'react';
import { ConfigProvider } from './useConfig';
import { LessonOneProvider } from './useLessonOne';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ConfigProvider>
      <LessonOneProvider>{children}</LessonOneProvider>
    </ConfigProvider>
  );
};

export default AppProvider;

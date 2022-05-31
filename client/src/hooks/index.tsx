import { ReactNode } from 'react';
import { LessonOneProvider } from './UseLessonOne';

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  return <LessonOneProvider>{children}</LessonOneProvider>;
};

export default AppProvider;

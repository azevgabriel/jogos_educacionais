import { ReactNode } from 'react';

export type ButtonTypes = 'submit' | 'reset';

export interface PopOverHeaderProps {
  children?: ReactNode;
  height?: string;
}

export interface PopOverBodyProps {
  children: ReactNode;
  height?: string;
}

export interface PopOverFooterProps {
  children?: ReactNode;
  height?: string;
}

export interface FormError {
  message: string;
  label: string;
}

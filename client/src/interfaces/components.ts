import { ReactNode } from 'react';
import { FlexTypes } from './styles';

export type ButtonTypes = 'link' | 'submit' | 'reset' | 'default';

export interface PopOverContainerProps {
  colors?: {
    background?: string;
    borderColor?: string;
  };
  sizes?: {
    width?: number;
    height?: number;
    borderWidht?: number;
    borderRadius?: number;
  };
}

export interface PopOverHeaderProps {
  children?: ReactNode;
  height?: string;
  alignVertical?: FlexTypes;
  alignHorizontal?: FlexTypes;
}

export interface PopOverBodyProps {
  children: ReactNode;
  height?: string;
  alignVertical?: FlexTypes;
  alignHorizontal?: FlexTypes;
}

export interface PopOverFooterProps {
  children?: ReactNode;
  height?: string;
  alignVertical?: FlexTypes;
  alignHorizontal?: FlexTypes;
}

export interface FormError {
  message: string;
  label: string;
}

export type CommonBodyBackground = 'menu' | 'farm' | 'adventureTime';

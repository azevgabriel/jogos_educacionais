import trophyImage from '@assets/images/trophy.png';
import { ReactNode } from 'react';
import { ReactElement } from 'react-markdown/lib/react-markdown';
import { Background, ModalWrapper } from './styles';

interface ModalProps {
  open: boolean;
  headerText: string;
  bodyElement: ReactNode | ReactElement;
  footerElement: ReactNode;
}

export const Modal = ({
  open,
  headerText,
  bodyElement,
  footerElement,
}: ModalProps) => {
  return (
    <Background isVisibility={open}>
      <ModalWrapper>
        <div className="header">
          <img src={trophyImage} alt="Imagem de um troféu" />
          <h1>{headerText}</h1>
        </div>
        <div className="body">{bodyElement}</div>
        <div className="footer">{footerElement}</div>
      </ModalWrapper>
    </Background>
  );
};

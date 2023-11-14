import { CommonBody } from '@components/CommonBody';
import { HeaderBar } from '@components/HeaderBar';
import { useState } from 'react';
import { Board } from './Board';
import { QuestionList, Wrapper } from './styles';

export const HuntingWords = () => {
  const words = [
    'POUPANÇA',
    'CRÉDITO',
    'GORJETA',
    'SALÁRIO',
    'INFLAÇÃO',
    'ALUGUEL',
    'ORÇAMENTO',
    'IMPOSTO',
    'JUROS',
    'COMPRA',
  ];
  const [correctWords, setCorrectWords] = useState<string[]>([]);

  const showCorrectWord = (index: number) => {
    const word = correctWords.find((word) => word === words[index]);
    if (word) return <b>{word}</b>;
    return <b>{words[index].split('').map(() => '_')}</b>;
  };

  return (
    <CommonBody
      background="adventureTime"
      header={
        <HeaderBar
          title={{
            complete: 'Caça Palavras',
            resume: '',
          }}
          children={<></>}
        />
      }
    >
      <Wrapper>
        <Board
          words={words}
          correctWords={correctWords}
          setCorrectWords={setCorrectWords}
        />
        <QuestionList>
          <h2>Encontre as resposta no caça!</h2>
          <h3>
            1. Qual é o termo usado para o dinheiro guardado para o futuro?
          </h3>
          <p>Resposta: {showCorrectWord(0)}</p>
          <h3>2. Como chamamos o ato de comprar algo agora e pagar depois?</h3>
          <p>Resposta: {showCorrectWord(1)}</p>
          <h3>
            3. O que é um pequeno valor dado em agradecimento por um serviço?
          </h3>
          <p>Resposta: {showCorrectWord(2)}</p>
          <h3>4. Como chamamos o dinheiro que você ganha por trabalhar?</h3>
          <p>Resposta: {showCorrectWord(3)}</p>
          <h3>
            5. Qual é o termo para a redução do valor do dinheiro ao longo do
            tempo?
          </h3>
          <p>Resposta: {showCorrectWord(4)}</p>
          <h3>
            6. Como chamamos o dinheiro que se paga regularmente pelo uso de
            algo?
          </h3>
          <p>Resposta: {showCorrectWord(5)}</p>
          <h3>7. O que você chama de um plano para controlar gastos?</h3>
          <p>Resposta: {showCorrectWord(6)}</p>
          <h3>
            8. Como se chama o dinheiro que se paga extra ao preço de algo?
          </h3>
          <p>Resposta: {showCorrectWord(7)}</p>
          <h3>
            9. Qual é o termo para o aumento do valor do dinheiro ao longo do
            tempo?
          </h3>
          <p>Resposta: {showCorrectWord(8)}</p>
          <h3>
            10. Como chamamos o ato de dar dinheiro em troca de bens ou
            serviços?
          </h3>
          <p>Resposta: {showCorrectWord(9)}</p>
        </QuestionList>
      </Wrapper>
    </CommonBody>
  );
};

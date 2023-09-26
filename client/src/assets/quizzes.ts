import { QuizModel } from '@interfaces/quiz';

import { v4 as uuidv4 } from 'uuid';
import MoneyImage from './images/money.jpg';
import PiggyBankImage from './images/piggyBank.jpg';
export const quizzes: QuizModel[] = [
  {
    id: uuidv4(),
    question: 'O que é dinheiro?',
    image: {
      credits:
        'https://br.freepik.com/vetores-gratis/ilustracao-realista-brasileira-real_20824836.htm#query=dinheiro&position=4&from_view=search&track=sph',
      src: MoneyImage,
      author: 'pikisuperstar',
    },
    alternatives: [
      'Um tipo de doce',
      'Um tipo de brinquedo',
      'Um meio de troca usado para comprar bens e serviços',
      'Um tipo de papel',
    ],
    indexCorrectAnswer: 2,
  },
  {
    id: uuidv4(),
    question: 'O que você faz com o seu dinheiro de mesada?',
    alternatives: [
      'Gasto tudo de uma vez',
      'Poupo uma parte e gasto o restante',
      'Dou tudo para os meus amigos',
      'Não recebo mesada',
    ],
    indexCorrectAnswer: 1,
  },
  {
    id: uuidv4(),
    image: {
      src: PiggyBankImage,
      credits:
        'https://br.freepik.com/psd-gratuitas/moedas-de-dolar-voando-sobre-o-cofrinho-rosa_19971781.htm#query=economizar&position=7&from_view=search&track=sph',
      author: 'jcomp',
    },
    question: 'Por que é importante economizar dinheiro?',
    alternatives: [
      'Para poder comprar doces',
      'Para poder comprar brinquedos caros',
      'Para ter dinheiro disponível no futuro ou para emergências',
      'Não é importante economizar dinheiro',
    ],
    indexCorrectAnswer: 2,
  },
  {
    id: uuidv4(),
    question: 'O que é um cofrinho?',
    alternatives: [
      'Um porco de verdade',
      'Uma caixa para guardar brinquedos',
      'Uma forma de guardar e economizar dinheiro',
      'Um tipo de bolo',
    ],
    indexCorrectAnswer: 2,
  },
  {
    id: uuidv4(),
    question: 'O que é um banco?',
    alternatives: [
      'Um lugar para sentar',
      'Um lugar onde guardamos comida',
      'Uma instituição financeira onde podemos guardar e pegar emprestado dinheiro',
      'Um lugar para brincar',
    ],
    indexCorrectAnswer: 2,
  },
  {
    id: uuidv4(),
    question: 'O que significa "orçamento"?',
    alternatives: [
      'Uma lista de desejos',
      'Uma lista de amigos',
      'Um plano que detalha como você vai gastar o seu dinheiro',
      'Um tipo de jogo',
    ],
    indexCorrectAnswer: 2,
  },
  {
    id: uuidv4(),
    question: 'Por que é importante não gastar mais dinheiro do que você tem?',
    alternatives: [
      'Para não ficar sem doces',
      'Para evitar dívidas e problemas financeiros',
      'Para ter mais brinquedos',
      'Não importa gastar mais do que temos',
    ],
    indexCorrectAnswer: 1,
  },
  {
    id: uuidv4(),
    question: 'O que você pode fazer para ganhar mais dinheiro?',
    alternatives: [
      'Pedir mais mesada',
      'Procurar moedas perdidas',
      'Economizar e investir dinheiro de forma inteligente',
      'Gastar todo o dinheiro que tem',
    ],
    indexCorrectAnswer: 2,
  },
  {
    id: uuidv4(),
    question: 'O que significa “investir”?',
    alternatives: [
      'Comprar brinquedos',
      'Comer doces',
      'Colocar o dinheiro em algo que pode fazer ele crescer com o tempo',
      'Jogar videogame',
    ],
    indexCorrectAnswer: 2,
  },
  {
    id: uuidv4(),
    question: 'O que significa "poupar" dinheiro?',
    alternatives: [
      'Gastar dinheiro com amigos',
      'Comprar coisas desnecessárias',
      'Guardar dinheiro para usar no futuro',
      'Comer muitos doces',
    ],
    indexCorrectAnswer: 2,
  },
];

import { QuizModel } from '@interfaces/quiz';

export const quizzes: QuizModel[] = [
  {
    question: 'Qual o nome do personagem?',
    image: 'https://i.imgur.com/IrzeKve.jpeg',
    alternatives: ['correto', 'a', 'Princesa Jujuba', 'BMO'],
    indexCorrectAnswer: 0,
  },
  {
    question: 'Qual o nome do personagem?',
    image: 'https://i.imgur.com/X6TLaZb.gif',
    alternatives: ['correto', 'b', 'Princesa Jujuba', 'BMO'],
    indexCorrectAnswer: 0,
  },
  {
    question: 'Qual o nome do personagem?',
    image: 'https://i.imgur.com/GhbrMvA.jpeg',
    alternatives: ['correto', 'c', 'Princesa Jujuba', 'BMO'],
    indexCorrectAnswer: 0,
  },
];

import anagram from './images/screenshots/anagram.png';
import huntingWords from './images/screenshots/huntingWords.png';
import memoryGame from './images/screenshots/memoryGame.png';
import quiz from './images/screenshots/quiz.png';

export const games = {
  letras: {
    name: 'Anagrama',
    description:
      ' Este jogo desafiador propõe que você rearranje letras para formar palavras válidas.',
    src: anagram,
    alt: 'Imagem do jogo das letras',
    link: '/jogos/letras',
    available: true,
  },
  'caça-palavras': {
    name: 'Caça-palavras',
    description:
      'Um passatempo com uma grade de letras onde se busca palavras escondidas horizontal, vertical e diagonalmente.',
    src: huntingWords,
    alt: 'Imagem do jogo do caça-palavras',
    link: '/jogos/caça',
    available: true,
  },
  quiz: {
    name: 'Quiz',
    description:
      'Um quiz é uma forma lúdica e interativa de aprender e testar conhecimentos, por meio de perguntas e respostas.',
    src: quiz,
    alt: 'Imagem do jogo do quiz',
    link: '/jogos/quiz',
    available: true,
  },
  memoria: {
    name: 'Jogo da memória',
    description:
      'Este jogo clássico envolve virar cartas e encontrar pares idênticos. Divirta-se enquanto treina seu cérebro!',
    src: memoryGame,
    alt: 'Imagem do jogo da memória',
    link: '/jogos/memoria',
    available: true,
  },
};

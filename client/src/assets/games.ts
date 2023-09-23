import notAvailableCard from './images/notAvailableCard.png';
import letterLesson from './images/screenshots/anagram.png';
import memoryGame from './images/screenshots/memoryGame.png';

export const games = {
  letras: {
    name: 'Anagrama',
    description:
      ' Este jogo desafiador propõe que você rearranje letras para formar palavras válidas.',
    src: letterLesson,
    alt: 'Imagem do jogo das letras',
    link: '/jogos/letras',
    available: true,
  },
  silabas: {
    name: 'Separando por sílabas',
    description: 'Em breve!',
    src: notAvailableCard,
    alt: 'Imagem do jogo das silabas',
    link: '/jogos/silabas',
    available: false,
  },
  quiz: {
    name: 'Quiz',
    description: 'Em breve!',
    src: notAvailableCard,
    alt: 'Imagem do jogo da ligação',
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

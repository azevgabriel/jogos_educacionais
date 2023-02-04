import notAvailableCard from './images/notAvailableCard.png';
import letterLesson from './images/screenshot.png';

export const games = {
  letras: {
    name: 'Escreva o nome do animal!',
    description: 'Nos ajude a completar o nome de cada um dos animais, conforme a imagem que aparece no jogo.',
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
  ligar: {
    name: 'Relacione os animais',
    description: 'Em breve!',
    src: notAvailableCard,
    alt: 'Imagem do jogo da ligação',
    link: '/jogos/ligar',
    available: false,
  },
  memoria: {
    name: 'Jogo da memória',
    description: 'Em breve!',
    src: notAvailableCard,
    alt: 'Imagem do jogo da memória',
    link: '/jogos/memoria',
    available: false,
  },
};

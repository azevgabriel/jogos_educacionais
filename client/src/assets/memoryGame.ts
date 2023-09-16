import { CardImage } from '@interfaces/memoryGame';

import TenCents from './images/coins/10_cents.png';
import OneReal from './images/coins/1_real.png';
import TwentyFiveCents from './images/coins/25_cents.png';
import FiftyCents from './images/coins/50_cents.png';
import FiveCents from './images/coins/5_cents.png';

export const cardImages: CardImage[] = [
  { src: OneReal, matched: false, title: '1 real', description: '' },
  { src: OneReal, matched: false, title: '1 real', description: '' },
  { src: FiftyCents, matched: false, title: '50 centavos', description: '' },
  { src: FiftyCents, matched: false, title: '50 centavos', description: '' },
  {
    src: TwentyFiveCents,
    matched: false,
    title: '25 centavos',
    description: '',
  },
  {
    src: TwentyFiveCents,
    matched: false,
    title: '25 centavos',
    description: '',
  },
  { src: TenCents, matched: false, title: '10 centavos', description: '' },
  { src: TenCents, matched: false, title: '10 centavos', description: '' },
  { src: FiveCents, matched: false, title: '5 centavos', description: '' },
  { src: FiveCents, matched: false, title: '5 centavos', description: '' },
];

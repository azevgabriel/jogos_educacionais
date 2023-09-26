import { v4 as uuidv4 } from 'uuid';

import { MemoryGameContextData } from '@interfaces/memoryGame';

import TenCents from './images/coins/10_cents.png';
import OneReal from './images/coins/1_real.png';
import TwentyFiveCents from './images/coins/25_cents.png';
import FiftyCents from './images/coins/50_cents.png';
import FiveCents from './images/coins/5_cents.png';

import OneHundredReal from './images/coins/100_real.jpg';
import TenReal from './images/coins/10_real.jpg';
import TwoHundredReal from './images/coins/200_real.jpg';
import TwentyReal from './images/coins/20_real.jpg';
import TwoReal from './images/coins/2_real.jpg';
import FiftyReal from './images/coins/50_real.jpg';
import FiveReal from './images/coins/5_real.jpg';

const cardsGameOneSizes: [number, number] = [180, 180];
const cardsGameTwoSizes: [number, number] = [180, 105];

export const memoryGameContextData: MemoryGameContextData[] = [
  {
    cards: [
      {
        id: uuidv4(),
        src: OneReal,
        matched: false,
        title: '1 real',
        description: '',
        sizes: cardsGameOneSizes,
      },
      {
        id: uuidv4(),
        src: OneReal,
        matched: false,
        title: '1 real',
        description: '',
        sizes: cardsGameOneSizes,
      },
      {
        id: uuidv4(),
        src: FiftyCents,
        matched: false,
        title: '50 centavos',
        description: '',
        sizes: cardsGameOneSizes,
      },
      {
        id: uuidv4(),
        src: FiftyCents,
        matched: false,
        title: '50 centavos',
        description: '',
        sizes: cardsGameOneSizes,
      },
      {
        id: uuidv4(),
        src: TwentyFiveCents,
        matched: false,
        title: '25 centavos',
        description: '',
        sizes: cardsGameOneSizes,
      },
      {
        id: uuidv4(),
        src: TwentyFiveCents,
        matched: false,
        title: '25 centavos',
        description: '',
        sizes: cardsGameOneSizes,
      },
      {
        id: uuidv4(),
        src: TenCents,
        matched: false,
        title: '10 centavos',
        description: '',
        sizes: cardsGameOneSizes,
      },
      {
        id: uuidv4(),
        src: TenCents,
        matched: false,
        title: '10 centavos',
        description: '',
        sizes: cardsGameOneSizes,
      },
      {
        id: uuidv4(),
        src: FiveCents,
        matched: false,
        title: '5 centavos',
        description: '',
        sizes: cardsGameOneSizes,
      },
      {
        id: uuidv4(),
        src: FiveCents,
        matched: false,
        title: '5 centavos',
        description: '',
        sizes: cardsGameOneSizes,
      },
    ],
    content: `A relação entre as moedas de Real (R$) é baseada em um sistema decimal, o que significa que as moedas de menor valor podem ser agrupadas para formar moedas de valor maior, até chegar ao valor de 1 Real, e múltiplos deste.

## Exemplos de Combinações para formar 1 Real:

- 1 moeda de 50 centavos e 5 moedas de 10 centavos.
- 4 moedas de 25 centavos.
- 10 moedas de 10 centavos.

## Características:

- Materiais: As moedas são feitas de uma combinação de metais, incluindo cobre, níquel e aço inoxidável.
- Imagens: Cada valor de moeda tem desenhos distintos, normalmente representando aspectos culturais, históricos ou da biodiversidade brasileira.

## Uso e Circulação:

- As moedas são usadas para transações do dia a dia e são muito importantes para o comércio, especialmente para fornecer troco aos consumidores.`,
  },
  {
    cards: [
      {
        id: uuidv4(),
        src: TwoReal,
        matched: false,
        title: '2 real',
        description: '',
        sizes: cardsGameTwoSizes,
      },
      {
        id: uuidv4(),
        src: TwoReal,
        matched: false,
        title: '2 real',
        description: '',
        sizes: cardsGameTwoSizes,
      },
      {
        id: uuidv4(),
        src: FiveReal,
        matched: false,
        title: '5 real',
        description: '',
        sizes: cardsGameTwoSizes,
      },
      {
        id: uuidv4(),
        src: FiveReal,
        matched: false,
        title: '5 real',
        description: '',
        sizes: cardsGameTwoSizes,
      },
      {
        id: uuidv4(),
        src: TenReal,
        matched: false,
        title: '10 real',
        description: '',
        sizes: cardsGameTwoSizes,
      },
      {
        id: uuidv4(),
        src: TenReal,
        matched: false,
        title: '10 real',
        description: '',
        sizes: cardsGameTwoSizes,
      },
      {
        id: uuidv4(),
        src: TwentyReal,
        matched: false,
        title: '20 real',
        description: '',
        sizes: cardsGameTwoSizes,
      },
      {
        id: uuidv4(),
        src: TwentyReal,
        matched: false,
        title: '20 real',
        description: '',
        sizes: cardsGameTwoSizes,
      },
      {
        id: uuidv4(),
        src: FiftyReal,
        matched: false,
        title: '50 real',
        description: '',
        sizes: cardsGameTwoSizes,
      },
      {
        id: uuidv4(),
        src: FiftyReal,
        matched: false,
        title: '50 real',
        description: '',
        sizes: cardsGameTwoSizes,
      },
      {
        id: uuidv4(),
        src: OneHundredReal,
        matched: false,
        title: '100 real',
        description: '',
        sizes: cardsGameTwoSizes,
      },
      {
        id: uuidv4(),
        src: OneHundredReal,
        matched: false,
        title: '100 real',
        description: '',
        sizes: cardsGameTwoSizes,
      },
      {
        id: uuidv4(),
        src: TwoHundredReal,
        matched: false,
        title: '200 real',
        description: '',
        sizes: cardsGameTwoSizes,
      },
      {
        id: uuidv4(),
        src: TwoHundredReal,
        matched: false,
        title: '200 real',
        description: '',
        sizes: cardsGameTwoSizes,
      },
    ],
    content: `As cédulas brasileiras têm uma rica história, representando a biodiversidade e a cultura do país. Elas são emitidas pelo Banco Central do Brasil e são parte integrante do Sistema Monetário Nacional.    
## Características
As cédulas possuem diferentes cores, tamanhos e imagens, cada uma representando um aspecto único do país, principalmente com foco em sua fauna e flora.
## Exemplos
- Cédula de R$ 2: Representada pela cor vermelha e tem a tartaruga marinha como símbolo.
- Cédula de R$ 5: Esta é de cor roxa e traz a imagem do garça.
- Cédula de R$ 10: Tem uma coloração azul e o beija-flor como símbolo.
- Cédula de R$ 20: Esta possui a cor amarela e tem o mico-leão-dourado como representante.
- Cédula de R$ 50: De cor laranja, tem a onça-pintada como símbolo.
- Cédula de R$ 100: De cor verde, tem a garoupa como representante.
- Cédula de R$ 200: É de cor cinza e tem o lobo-guará como símbolo.`,
  },
];

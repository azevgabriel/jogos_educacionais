import { QuizModel } from '@interfaces/quiz';

import { v4 as uuidv4 } from 'uuid';

import AllowanceImage from './images/allowance.jpg';
import BankImage from './images/bank.jpg';
import BudgetImage from './images/budget.jpg';
import MoneyImage from './images/money.jpg';
import PiggyBankImage from './images/piggyBank.jpg';
import PiggyBank2Image from './images/piggyBank2.jpg';
import ToInvestImage from './images/toInvest.jpg';
import ToSaveImage from './images/toSave.jpg';

export const quizzes: QuizModel[] = [
  {
    id: uuidv4(),
    image: {
      credits:
        'https://br.freepik.com/vetores-gratis/ilustracao-realista-brasileira-real_20824836.htm#query=dinheiro&position=4&from_view=search&track=sph',
      src: MoneyImage,
      author: 'pikisuperstar',
    },
    question: 'O que é dinheiro?',
    alternatives: [
      'Um tipo de papel colorido',
      'Um meio de troca usado para comprar bens e serviços',
      'Algo que se usa apenas para poupar',
      'Um conceito usado para medir a riqueza e a capacidade financeira',
    ],
    indexCorrectAnswer: 1,
  },
  {
    id: uuidv4(),
    image: {
      credits:
        'https://br.freepik.com/vetores-gratis/composicao-isometrica-de-apoio-parental-de-seguro-social-com-mae-recebendo-mesadas-ilustracao-vetorial_41684261.htm#query=allowance&position=1&from_view=search&track=sph&uuid=ace44d1c-8a4e-4cfc-9d0b-dcac9764a60c',
      src: AllowanceImage,
      author: 'macrovector',
    },
    question:
      'Qual destas opções é um exemplo de bom uso do dinheiro de uma mesada?',
    alternatives: [
      'Comprar imediatamente o que deseja sem pensar no futuro',
      'Dividir o dinheiro entre poupança, despesas e lazer',
      'Dar todo o dinheiro para outras pessoas',
      'Gastar tudo em jogos online',
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
      'Para poder gastar em coisas que realmente desejo no futuro',
      'Para investir em hobbies e interesses pessoais',
      'Para ter dinheiro disponível no futuro ou para emergências',
      'Economizar sempre é menos importante do que aproveitar o momento',
    ],
    indexCorrectAnswer: 2,
  },
  {
    id: uuidv4(),
    question: 'Qual é a função principal de um cofrinho?',
    alternatives: [
      'Servir como um objeto decorativo no quarto',
      'Uma ferramenta educativa para ensinar crianças sobre poupança e gestão financeira',
      'Armazenar pequenos objetos pessoais',
      'Usado em jogos de tabuleiro como peça de jogo',
    ],
    indexCorrectAnswer: 1,
    image: {
      src: PiggyBank2Image,
      credits:
        'https://br.freepik.com/fotos-gratis/mao-de-renderizacao-3d-colocar-moeda-de-ouro-no-cofrinho_33525412.htm#query=piggy%20bank&position=1&from_view=search&track=ais&uuid=6b84f123-4622-46c4-b897-31ce079bc80f',
      author: 'upklyak',
    },
  },
  {
    id: uuidv4(),
    question: 'O que é um banco?',
    alternatives: [
      'Uma loja onde se podem comprar e vender produtos',
      'Uma instituição onde se guarda dinheiro e se pode obter empréstimos',
      'Um escritório onde as pessoas vão para trabalhar',
      'Um local público para recreação e lazer',
    ],
    image: {
      src: BankImage,
      credits:
        'https://br.freepik.com/fotos-gratis/feliz-empresario-conversando-com-seu-colega-enquanto-analisa-relatorios-financeiros-no-escritorio_25592445.htm#query=bank&position=5&from_view=search&track=sph&uuid=4fcf1de6-6ae8-44b3-8847-3eef6454c10d',
      author: 'Drazen Zigic',
    },
    indexCorrectAnswer: 1,
  },
  {
    id: uuidv4(),
    question: 'Qual é o primeiro passo para criar um orçamento eficaz?',
    alternatives: [
      'Listar todas as dívidas',
      'Determinar sua renda mensal total',
      'Definir metas financeiras',
      'Anotar todos os gastos por um mês',
    ],
    indexCorrectAnswer: 2,
    image: {
      src: BudgetImage,
      author: 'pressfoto',
      credits:
        'https://br.freepik.com/fotos-gratis/empresario-trabalhando-com-contas_5767022.htm#query=budget&position=40&from_view=search&track=sph&uuid=998ef22a-58d7-4878-aded-4e8979fa2168',
    },
  },
  {
    id: uuidv4(),
    question: 'O que é um fundo de emergência?',
    alternatives: [
      'Dinheiro guardado para gastos futuros, como férias',
      'Uma quantia reservada para despesas inesperadas, como emergências médicas ou reparos domésticos',
      'Investimentos em ações',
      'Dinheiro economizado para aposentadoria',
    ],
    indexCorrectAnswer: 1,
  },
  {
    id: uuidv4(),
    question: 'Por que é importante poupar para a aposentadoria?',
    alternatives: [
      'Para poder viajar',
      'Porque a renda geralmente diminui após a aposentadoria',
      'Para pagar dívidas',
      'Para comprar um carro novo',
    ],
    indexCorrectAnswer: 2,
  },
  {
    id: uuidv4(),
    question: 'O que significa “investir”?',
    alternatives: [
      'Gastar dinheiro em produtos de consumo imediato',
      'Economizar dinheiro em uma conta poupança',
      'Aplicar recursos em ativos ou projetos esperando obter um retorno financeiro no futuro.',
      'Comprar itens que perdem valor rapidamente',
    ],
    image: {
      src: ToInvestImage,
      author: 'freepik',
      credits:
        'https://br.freepik.com/fotos-gratis/mao-segurando-uma-seta-de-crescimento-com-moedas_11383316.htm#query=to%20invest&position=18&from_view=search&track=ais&uuid=83bb76ed-9fd0-448f-ab35-8f54b4d1dd77',
    },
    indexCorrectAnswer: 3,
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
    image: {
      src: ToSaveImage,
      credits:
        'https://br.freepik.com/fotos-gratis/salvando-frascos-deitado_3980983.htm#query=to%20save&position=5&from_view=search&track=ais&uuid=13557e5d-39b5-4328-9dc4-eb3af4ff4e4e',
      author: 'freepik',
    },
    indexCorrectAnswer: 2,
  },
];

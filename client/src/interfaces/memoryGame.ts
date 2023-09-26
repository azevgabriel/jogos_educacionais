export interface CardImage {
  id: string;
  src: string;
  matched: boolean;
  title: string;
  description: string;
  sizes: [number, number];
}
export interface MemoryGameParams {
  choices: [CardImage | undefined, CardImage | undefined];
  turns: number;
  hits: number;
  progress: number;
}

export interface MemoryGameContextData {
  cards: CardImage[];
  content: string;
}

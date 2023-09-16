export interface CardImage {
  src: string;
  matched: boolean;
  title: string;
  description: string;
}
export interface MemoryGameParams {
  choices: [CardImage | undefined, CardImage | undefined];
  turns: number;
  hits: number;
}

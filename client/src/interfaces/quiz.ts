export interface ImageModel {
  src: string;
  credits: string;
  author: string;
}

export interface QuizModel {
  id: string;
  image?: ImageModel;
  question: string;
  alternatives: string[];
  indexCorrectAnswer: number;
}

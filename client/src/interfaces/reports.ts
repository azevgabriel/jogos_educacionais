export interface PositionProps {
    x: number;
    y: number;
}
   
export interface ReportProps {
    letter: string;
    positions: PositionProps[]
    time: number
    isCorrect?: 'true' | 'false'
}
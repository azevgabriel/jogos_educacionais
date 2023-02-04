export interface PositionProps {
    x: number;
    y: number;
    time: number;
    index: number;
}
   
export interface ReportProps {
    letter: string;
    positions: PositionProps[]
    totalTime?: number;
}
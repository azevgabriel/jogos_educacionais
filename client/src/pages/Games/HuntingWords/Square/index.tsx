import { Container } from './styles';

interface SquareProps {
  letter: string;
  x: number;
  y: number;
  setIsDragging: (isDragging: boolean) => void;
  setSelectedCells: (selectedCells: { row: number; col: number }[]) => void;
  isDragging: boolean;
  selectedCells: { row: number; col: number }[];
  correctSelectedCells: { row: number; col: number }[];
}

export const Square = ({
  letter,
  x,
  y,
  isDragging,
  setIsDragging,
  setSelectedCells,
  selectedCells,
  correctSelectedCells,
}: SquareProps) => {
  const handleMouseDown = (row: number, col: number) => {
    setIsDragging(true);
    setSelectedCells([{ row, col }]);
  };

  const handleMouseMove = (row: number, col: number) => {
    if (isDragging) {
      if (!selectedCells.find((cell) => cell.row === row && cell.col === col)) {
        setSelectedCells([...selectedCells, { row, col }]);
      }
    }
  };

  return (
    <Container
      onMouseDown={() => handleMouseDown(x, y)}
      onMouseMove={() => handleMouseMove(x, y)}
      selected={
        !!correctSelectedCells.find((cell) => cell.row === x && cell.col === y)
      }
    >
      <span>{letter}</span>
    </Container>
  );
};

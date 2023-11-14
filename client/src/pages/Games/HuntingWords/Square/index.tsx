import { Container } from './styles';

interface SquareProps {
  letter: string;
  x: number;
  y: number;
  setIsDragging: (isDragging: boolean) => void;
  setSelectedCells: (selectedCells: { row: number; col: number }[]) => void;
  isDragging: boolean;
  selectedCells: { row: number; col: number }[];
  filteredSelectedCells: { row: number; col: number }[];
  correctCells: { row: number; col: number; color: string }[];
}

export const Square = ({
  letter,
  x,
  y,
  isDragging,
  setIsDragging,
  setSelectedCells,
  selectedCells,
  filteredSelectedCells,
  correctCells,
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

  const isSelected = filteredSelectedCells.find(
    (cell) => cell.row === x && cell.col === y
  );
  const isCorrect = correctCells.find(
    (cell) => cell.row === x && cell.col === y
  );

  const borderRadius = () => {
    if (x === 0 && y === 0) {
      return '10px 0 0 0';
    }
    if (x === 0 && y === 10) {
      return '0 10px 0 0';
    }
    if (x === 10 && y === 0) {
      return '0 0 0 10px';
    }
    if (x === 10 && y === 10) {
      return '0 0 10px 0';
    }
  };

  return (
    <Container
      onMouseDown={() => handleMouseDown(x, y)}
      onMouseMove={() => handleMouseMove(x, y)}
      selected={!!isSelected}
      correct={!!isCorrect ? isCorrect.color : undefined}
      diagonalBorder={borderRadius()}
    >
      <span>{letter}</span>
    </Container>
  );
};

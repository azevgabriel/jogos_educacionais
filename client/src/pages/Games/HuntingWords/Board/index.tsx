import { randomizeColors } from '@utils/colors';
import { useEffect, useState } from 'react';
import { Square } from '../Square';
import { Container, Row } from './styles';

interface BoardProps {
  words: string[];
  correctWords: string[];
  setCorrectWords: (correctWords: string[]) => void;
}

export const Board = ({ words, correctWords, setCorrectWords }: BoardProps) => {
  const [board, setBoard] = useState<string[][]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [selectedCells, setSelectedCells] = useState<
    { row: number; col: number }[]
  >([]);
  const [filteredSelectedCells, setFilteredSelectedCells] = useState<
    { row: number; col: number }[]
  >([]);

  const [correctCells, setCorrectCells] = useState<
    { row: number; col: number; color: string }[]
  >([]);

  useEffect(() => {
    setBoard([
      ['S', 'A', 'L', 'U', 'G', 'U', 'E', 'L', 'C', 'P', 'Õ'],
      ['S', 'Z', 'Í', 'T', 'S', 'A', 'L', 'Á', 'R', 'I', 'O'],
      ['P', 'Ó', 'U', 'P', 'Ê', 'S', 'R', 'G', 'C', 'O', 'R'],
      ['I', 'S', 'O', 'R', 'U', 'J', 'Q', 'R', 'R', 'G', 'O'],
      ['M', 'N', 'M', 'Y', 'P', 'F', 'É', 'O', 'E', 'O', 'Ã'],
      ['P', 'F', 'V', 'P', 'J', 'D', 'I', 'C', 'D', 'R', 'Ç'],
      ['O', 'L', 'Ó', 'E', 'I', 'U', 'Q', 'M', 'À', 'J', 'A'],
      ['S', 'A', 'X', 'T', 'S', 'S', 'R', 'G', 'C', 'E', 'L'],
      ['T', 'C', 'O', 'M', 'P', 'R', 'A', 'O', 'D', 'T', 'F'],
      ['O', 'R', 'Ç', 'A', 'M', 'E', 'N', 'T', 'O', 'A', 'N'],
      ['Y', 'A', 'Ç', 'N', 'A', 'P', 'U', 'O', 'P', 'O', 'I'],
    ]);
  }, []);

  const handleMouseUp = () => {
    if (isDragging) {
      console.log('Selected cells: ', selectedCells);
      setIsDragging(false);
      setSelectedCells([]);
    }
  };

  const verifyDirection = (selectedCells: { row: number; col: number }[]) => {
    const firstCell = selectedCells[0];
    const lastCell = selectedCells[selectedCells.length - 1];

    if (firstCell.row === lastCell.row) {
      return 'Horizontal';
    } else if (firstCell.col === lastCell.col) {
      return 'Vertical';
    } else {
      return 'Diagonal';
    }
  };

  const completeIncompletedRow = (row: { row: number; col: number }[]) => {
    const firstCell = row[0];
    const lastCell = row[row.length - 1];

    const newRow = [];

    if (firstCell.col <= lastCell.col)
      for (let i = firstCell.col; i <= lastCell.col; i++) {
        newRow.push({ row: firstCell.row, col: i });
      }
    else
      for (let i = firstCell.col; i >= lastCell.col; i--) {
        newRow.push({ row: firstCell.row, col: i });
      }

    return newRow;
  };

  const completeIncompletedCol = (col: { row: number; col: number }[]) => {
    const firstCell = col[0];
    const lastCell = col[col.length - 1];

    const newCol = [];

    if (firstCell.row <= lastCell.row)
      for (let i = firstCell.row; i <= lastCell.row; i++) {
        newCol.push({ row: i, col: firstCell.col });
      }
    else
      for (let i = firstCell.row; i >= lastCell.row; i--) {
        newCol.push({ row: i, col: firstCell.col });
      }

    return newCol;
  };

  const completeIncompletedDiagonal = (col: { row: number; col: number }[]) => {
    const firstCell = col[0];
    const lastCell = col[col.length - 1];

    const newDiagonal = [];

    const toRight = firstCell.col < lastCell.col;
    const toDown = firstCell.row < lastCell.row;

    if (toRight && toDown) {
      for (let i = 0; i <= lastCell.row - firstCell.row; i++) {
        newDiagonal.push({ row: firstCell.row + i, col: firstCell.col + i });
      }
    } else if (!toRight && toDown) {
      for (let i = 0; i <= lastCell.row - firstCell.row; i++) {
        newDiagonal.push({ row: firstCell.row + i, col: firstCell.col - i });
      }
    } else if (toRight && !toDown) {
      for (let i = 0; i <= firstCell.row - lastCell.row; i++) {
        newDiagonal.push({ row: firstCell.row - i, col: firstCell.col + i });
      }
    } else {
      for (let i = 0; i <= firstCell.row - lastCell.row; i++) {
        newDiagonal.push({ row: firstCell.row - i, col: firstCell.col - i });
      }
    }

    return newDiagonal;
  };

  useEffect(() => {
    if (selectedCells.length > 1) {
      const direction = verifyDirection(selectedCells);

      if (direction === 'Horizontal') {
        const firstCell = selectedCells[0];
        const row = selectedCells.filter((cell) => cell.row === firstCell.row);
        const newRow = completeIncompletedRow(row);
        setFilteredSelectedCells(newRow);
      }

      if (direction === 'Vertical') {
        const firstCell = selectedCells[0];
        const col = selectedCells.filter((cell) => cell.col === firstCell.col);
        const newCol = completeIncompletedCol(col);
        setFilteredSelectedCells(newCol);
      }

      if (direction === 'Diagonal') {
        const firstCell = selectedCells[0];
        const diagonal = selectedCells.filter(
          (cell) =>
            Math.abs(cell.col - cell.row) ===
            Math.abs(firstCell.col - firstCell.row)
        );
        const newDiagonal = completeIncompletedDiagonal(diagonal);
        setFilteredSelectedCells(newDiagonal);
      }
    }
  }, [selectedCells]);

  const resetCells = () => {
    setSelectedCells([]);
    setFilteredSelectedCells([]);
  };

  useEffect(() => {
    if (!isDragging && filteredSelectedCells?.length) {
      const word = filteredSelectedCells
        .map((cell) => board[cell.row][cell.col])
        .join('');
      const isCheckedWord = correctWords.find((w) => w === word);

      if (isCheckedWord) {
        resetCells();
        return;
      }

      const checkWord = words.find((w) => w === word);

      const color = randomizeColors();

      const filteredSelectedCellsWithColor = filteredSelectedCells.map(
        (cell) => ({ ...cell, color })
      );

      if (checkWord) {
        setCorrectWords([...correctWords, checkWord]);
        setCorrectCells([...correctCells, ...filteredSelectedCellsWithColor]);
      }

      resetCells();
    }
  }, [isDragging, filteredSelectedCells]);

  return (
    <Container onMouseUp={handleMouseUp}>
      {board.map((row, i) => (
        <Row key={i}>
          {row.map((letter, j) => (
            <Square
              key={j}
              letter={letter}
              isDragging={isDragging}
              selectedCells={selectedCells}
              setIsDragging={setIsDragging}
              setSelectedCells={setSelectedCells}
              filteredSelectedCells={filteredSelectedCells}
              correctCells={correctCells}
              x={i}
              y={j}
            />
          ))}
        </Row>
      ))}
    </Container>
  );
};

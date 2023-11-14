import { CommonBody } from '@components/CommonBody';
import { HeaderBar } from '@components/HeaderBar';
import { useEffect, useState } from 'react';
import { Square } from './Square';
import { Board, Row, Wrapper } from './styles';

export const HuntingWords = () => {
  const words = ['react', 'typescript', 'canvas'];

  const [board, setBoard] = useState<string[][]>([]);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [selectedCells, setSelectedCells] = useState<
    { row: number; col: number }[]
  >([]);
  const [correctSelectedCells, setCorrectSelectedCells] = useState<
    { row: number; col: number }[]
  >([]);

  useEffect(() => {
    setBoard([
      ['r', 'e', 'a', 'c', 't'],
      ['t', 'y', 'p', 'e', 's'],
      ['c', 'a', 'n', 'v', 'a'],
      ['s', 'c', 'r', 'i', 'p'],
      ['t', 's', 'e', 't', 'y'],
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
        setCorrectSelectedCells(newRow);
      }

      if (direction === 'Vertical') {
        const firstCell = selectedCells[0];
        const col = selectedCells.filter((cell) => cell.col === firstCell.col);
        const newCol = completeIncompletedCol(col);
        setCorrectSelectedCells(newCol);
      }

      if (direction === 'Diagonal') {
        const firstCell = selectedCells[0];
        const diagonal = selectedCells.filter(
          (cell) =>
            Math.abs(cell.col - cell.row) ===
            Math.abs(firstCell.col - firstCell.row)
        );
        const newDiagonal = completeIncompletedDiagonal(diagonal);
        setCorrectSelectedCells(newDiagonal);
      }
    }
  }, [selectedCells]);

  return (
    <CommonBody
      background="adventureTime"
      header={
        <HeaderBar
          title={{
            complete: 'Caça Palavras',
            resume: '',
          }}
          children={<></>}
        />
      }
    >
      <Wrapper onMouseUp={handleMouseUp}>
        <Board>
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
                  correctSelectedCells={correctSelectedCells}
                  x={i}
                  y={j}
                />
              ))}
            </Row>
          ))}
        </Board>
      </Wrapper>
    </CommonBody>
  );
};

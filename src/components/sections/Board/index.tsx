import React from 'react';
import styles from './Board.module.css';
import { createInitialBoard } from '@/utils/createInitialBoard';
import { Square } from '@/components/ui';

const board = createInitialBoard();

export const Board: React.FC = () => {
  return (
    <div className={styles.board}>
      <div className={styles.grid}>
        {board.map((row, rowIndex) =>
          row.map((checker, colIndex) => {
            const position = { row: rowIndex, col: colIndex };

            return (
              <Square
                key={`${rowIndex}-${colIndex}`}
                position={position}
                isBlack={(rowIndex + colIndex) % 2 === 1}
                isValidMove={true}
                isSelected={false}
                onClick={() => console.log('Клик: ', position)}></Square>
            );
          }),
        )}
      </div>
    </div>
  );
};

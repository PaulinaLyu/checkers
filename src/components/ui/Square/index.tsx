import { FC, ReactNode } from 'react';
import { Position } from '@/types/game';
import styles from './Square.module.css';

interface SquareProps {
  position: Position;
  isBlack: boolean;
  isValidMove: boolean;
  isSelected: boolean;
  onClick: () => void;
  children?: ReactNode;
}

export const Square: FC<SquareProps> = ({
  position,
  isBlack,
  isValidMove,
  isSelected,
  onClick,
  children,
}) => {
  const squareClassNames = [
    styles.square,
    isBlack ? styles.dark : styles.light,
    isSelected ? styles.selected : '',
    isValidMove ? styles.validMove : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={squareClassNames} onClick={onClick} data-position={`${position.row},${position.col}`}>
      {children}
    </div>
  );
};

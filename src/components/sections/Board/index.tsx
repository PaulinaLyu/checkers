import { BOARD_SIZE } from '@/constants';
import { Square } from '@/components/ui/Square';
import styles from './Board.module.css';

export const Board = () => {
  const rows = Array.from({ length: BOARD_SIZE }, (_, y) =>
    Array.from({ length: BOARD_SIZE }, (_, x) => <Square key={x} x={x} y={y} />),
  );

  return (
    <div className={styles.board}>
      <div className={styles.grid}>{rows}</div>
    </div>
  );
};

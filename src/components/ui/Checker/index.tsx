import { FC } from 'react';
import { Crown } from 'lucide-react';
import { Checker as CheckerType } from '@/types/game';
import { Player } from '@/types/players';
import styles from './Checker.module.css';

interface CheckerProps {
  checker: CheckerType;
  isSelected: boolean;
  currentPlayer: Player;
}

export const Checker: FC<CheckerProps> = ({ checker, isSelected, currentPlayer }) => {
  const isHost = checker.player === Player.HOST;
  const isKing = checker.isKing;
  const isCursor = checker.player === currentPlayer;

  const checkerClassNames = [
    styles.checker,
    isHost ? styles.host : styles.opponent,
    isSelected ? `checker-selected ${styles.selected}` : '',
    isCursor ? styles.cursor : '',
  ]
    .filter(Boolean)
    .join(' ');

  const crownClass = isHost ? styles.hostCrown : styles.opponentCrown;

  return (
    <div className={checkerClassNames}>{isKing && <Crown className={`${styles.crown} ${crownClass}`} />}</div>
  );
};

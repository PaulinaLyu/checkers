import { FC } from 'react';
import { Crown } from 'lucide-react';
import { Checker as CheckerType, CheckerType as CheckerTypeEnum } from '@/types/game';
import { Player } from '@/types/players';
import styles from './Checker.module.css';

interface CheckerProps {
  checker: CheckerType;
  isSelected: boolean;
}

export const Checker: FC<CheckerProps> = ({ checker, isSelected }) => {
  const isHost = checker.player === Player.HOST;
  const isKing = checker.type === CheckerTypeEnum.KING;

  const checkerClassNames = [
    styles.checker,
    isHost ? styles.host : styles.opponent,
    isSelected ? styles.selected : '',
  ]
    .filter(Boolean)
    .join(' ');

  const crownClass = isHost ? styles.hostCrown : styles.opponentCrown;

  return (
    <div className={checkerClassNames}>{isKing && <Crown className={`${styles.crown} ${crownClass}`} />}</div>
  );
};

import { FC } from 'react';
import styles from './Button.module.css';

type Variant = 'newGame' | 'undo' | 'hint';

interface ButtonProps {
  onClick: () => void;
  icon?: React.ReactNode;
  text: string;
  variant?: Variant;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  onClick,
  icon,
  text,
  variant = 'newGameBtn',
  disabled = false,
}) => {
  const variantClass = {
    newGame: styles.newGameBtn,
    undo: styles.undoBtn,
    hint: styles.hintBtn,
  }[variant];

  const className = `${styles.button} ${variantClass} ${disabled ? styles.disabled : ''}`;

  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {icon}
      {text}
    </button>
  );
};

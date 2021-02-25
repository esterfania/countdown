import { MouseEventHandler, ReactNode } from 'react';
import styles from '../styles/components/CountdownButton.module.css';

interface CountdownButtonProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: CountdownButtonEnum;
  isDisabled?: boolean;
}

export enum CountdownButtonEnum {
  active = 'countdownButtonActive',
}

export function CountdownButton(props: CountdownButtonProps) {
  return (
    <button
      type='button'
      className={`${styles.countdownButton} ${styles[props.type]}`}
      onClick={props.onClick}
      disabled={props.isDisabled}
    >
      {props.children}
    </button>
  );
}

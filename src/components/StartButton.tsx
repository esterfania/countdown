import styles from '../styles/components/StartButton.module.css';

interface StartButtonProps {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function StartButton(props: StartButtonProps) {
  return (
    <button className={styles.startButton} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

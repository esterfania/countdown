import styles from '../styles/components/CountdownButton.module.css';

interface CountdownButtonProps {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function CountdownButton(props: CountdownButtonProps) {
  return (
    <button className={styles.countdownButton} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

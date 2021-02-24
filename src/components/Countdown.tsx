import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';
import { CountdownButton } from './CountdownButton';

export function Countdown() {
  const [time, setTime] = useState(30 * 60);
  const [active, setActive] = useState(false);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  function startCountdonw() {
    setActive(true);
  }

  return (
    <>
      <div className={styles.countdownContainer}>
        <div className={styles.countdownTime}>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div className={styles.countdownTime}>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      <CountdownButton onClick={startCountdonw}> Iniciar um ciclo </CountdownButton>
    </>
  );
}

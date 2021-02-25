import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Countdown.module.css';
import { CountdownButton, CountdownButtonEnum } from './CountdownButton';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      setHasFinished(true);
      startNewChallenge()
    }
  }, [isActive, time]);

  function handleCountdown() {
    setIsActive(true);
  }

  function resetCountdonw() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(25 * 60);
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
      {hasFinished ? (
        <CountdownButton isDisabled={true}>Ciclo encerrado</CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton
              type={CountdownButtonEnum.active}
              onClick={resetCountdonw}
            >
              Abandonar ciclo
            </CountdownButton>
          ) : (
            <CountdownButton onClick={handleCountdown}>
              Iniciar um ciclo
            </CountdownButton>
          )}
        </>
      )}
    </>
  );
}

import styles from '../styles/components/Countdown.module.css';
import { CountdownButton, CountdownButtonEnum } from './CountdownButton';
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';


export function Countdown() {
  const {minutes, seconds, hasFinished, isActive, resetCountdonw, startCountdown} = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


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
            <CountdownButton onClick={startCountdown}>
              Iniciar um ciclo
            </CountdownButton>
          )}
        </>
      )}
    </>
  );
}

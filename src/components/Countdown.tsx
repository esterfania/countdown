import styled from 'styled-components';
import { CountdownButton } from './CountdownButton';
import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';

const CountdownWrapper = styled.div`
  font-family: Rajdhani;
  font-weight: 600;
  font-size: 8.5rem;
  color: ${(props) => props.theme.title};

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 3.5rem;

  > span {
    padding: 0.5rem;
  }
  div {
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    align-items: center;

    border-radius: 5px;
    background: ${(props) => props.theme.white};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

    text-align: center;
    > span {
      flex: 1;
    }
    > span:first-child {
      border-right: 1px solid ${(props) => props.theme.grayLine};
    }
    > span:last-child {
      border-left: 1px solid ${(props) => props.theme.grayLine};
    }
  }
`;

export function Countdown() {
  const { minutes, seconds, hasFinished, isActive, resetCountdonw, startCountdown } = useContext(
    CountdownContext
  );

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <>
      <CountdownWrapper>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </CountdownWrapper>
      {hasFinished ? (
        <CountdownButton isDisabled={true}>
          Ciclo encerrado
          <img src="/icons/check_circle.svg" alt="check_circle"></img>
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton active={isActive} onClick={resetCountdonw}>
              Abandonar ciclo
            </CountdownButton>
          ) : (
            <CountdownButton onClick={startCountdown}>Iniciar um ciclo</CountdownButton>
          )}
        </>
      )}
    </>
  );
}

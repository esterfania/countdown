import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export const CountdownContext = createContext({} as CountdownContextData);

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isActive: boolean;
  startCountdown: () => void;
  resetCountdonw: () => void;
}

interface CountdownProviderProps {
  children: ReactNode;
}
let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider(props: CountdownProviderProps) {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setIsActive(false);
      setHasFinished(true);
      startNewChallenge();
    }
  }, [isActive, time]);

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdonw() {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setHasFinished(false);
    setTime(0.1 * 60);
  }
  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountdonw,
      }}
    >
      {props.children}
    </CountdownContext.Provider>
  );
}

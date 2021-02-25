import { createContext, useState, ReactNode } from 'react';

export const ChallengesContext = createContext({});

interface ChallengsProviderProps {
  children: ReactNode;
}
export function ChallengesProvider(props: ChallengsProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  function levelUp() {
    setLevel(level + 1);
  }
  return (
    <ChallengesContext.Provider
      value={{ level, currentExperience, challengesCompleted, levelUp }}
    >
      {props.children}
    </ChallengesContext.Provider>
  );
}

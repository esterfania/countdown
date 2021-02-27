import { useContext } from 'react';
import styled from 'styled-components';
import { ChallengesContext } from '../contexts/ChallengesContext';

const CompletedChallengesWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 3.5rem;
  padding-bottom: 1rem;
  border-bottom: 1.5px solid ${(props) => props.theme.grayLine};

  > :first-child {
    font-size: 1.25rem;
  }
  > :nth-child(2) {
    font-size: 1.5rem;
  }
`;

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <CompletedChallengesWrapper>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </CompletedChallengesWrapper>
  );
}

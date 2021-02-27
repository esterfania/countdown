import styled from 'styled-components';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

const ExperienceBarWrapper = styled.header`
  display: flex;
  align-items: center;
  padding-bottom: 10%;

  span {
    font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${(props) => props.theme.grayLine};
    margin: 0 1.5rem;
    position: relative;
  }

  > div {
    > div {
      height: 4px;
      border-radius: 4px;
      background: ${(props) => props.theme.green};
    }

    > span {
      position: absolute;
      top: 12px;
      transform: translateX(-50%);
    }
  }
`;

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <ExperienceBarWrapper>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}></div>
        <span style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </ExperienceBarWrapper>
  );
}

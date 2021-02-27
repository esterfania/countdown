import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styled from 'styled-components';

const ProfileWrapper = styled.section`
  display: flex;
  align-items: center;
  > img {
    border-radius: 50%;
    width: 88px;
    height: 88px;
    object-fit: cover;
  }
  div {
    margin-left: 1.5rem;
    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: ${(props) => props.theme.title};
    }
    p {
      font-size: 1rem;
      margin-top: 0.5rem;
    }
    span {
      margin-left: 0.5rem;
    }
  }
`;

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <ProfileWrapper>
      <img alt="Julia Nogueira" src="/img.png" />
      <div>
        <strong>Julia Nogueira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          <span>Level {level}</span>
        </p>
      </div>
    </ProfileWrapper>
  );
}

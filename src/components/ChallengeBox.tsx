import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styled from 'styled-components';

const ChallengeBoxNotActive = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.4;
  }

  figure {
    line-height: 1.4;
    max-width: 70%;
    margin-top: 3rem;
  }

  figure > img {
    margin-bottom: 1rem;
  }
`;

const ChallengeBoxActiveWrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  header {
    color: ${(props) => props.theme.blue};
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid ${(props) => props.theme.grayLine};
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      margin-top: 0.5rem;
      line-height: 1.5;
    }
  }
  strong {
    font-weight: 600;
    font-size: 2rem;
    color: ${(props) => props.theme.title};
    margin: 1.5rem 1rem;
  }
  img {
    margin-bottom: 1.5rem;
  }
  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  button {
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 5px;
    color: ${(props) => props.theme.white};
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;

    :first-child {
      background: ${(props) => props.theme.red};
    }
    :last-child {
      background: ${(props) => props.theme.green};
    }
    &:hover {
      filter: brightness(0.9);
    }
  }

  @media screen and (max-width: 500px) {
    footer {
      margin-top: 2rem;
    }

    img {
      margin-top: 1.5rem;
    }
  }
`;
const ChallengeBoxContainer = styled.section`
  height: 100%;
  background-color: ${(props) => props.theme.white};
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
function ChallengeBoxActive({ activeChallenge, resetChallenge, completeChallenge }) {
  return (
    <ChallengeBoxActiveWrapper>
      <header>
        <strong>Ganhe {activeChallenge.amount} xp</strong>
      </header>
      <main>
        <figure>
          <img src={`icons/${activeChallenge.type}.svg`} alt="body" />
          <figcaption>
            <strong>Exercite-se</strong>
            <p>{activeChallenge.description}</p>
          </figcaption>
        </figure>
      </main>
      <footer>
        <button type="button" onClick={resetChallenge}>
          Falhei
        </button>
        <button type="button" onClick={completeChallenge}>
          Completei
        </button>
      </footer>
    </ChallengeBoxActiveWrapper>
  );
}

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdonw } = useContext(CountdownContext);

  function handleChallengeSucceded() {
    completeChallenge();
    resetCountdonw();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdonw();
  }

  return (
    <ChallengeBoxContainer>
      {activeChallenge ? (
        <ChallengeBoxActive
          activeChallenge={activeChallenge}
          resetChallenge={handleChallengeFailed}
          completeChallenge={handleChallengeSucceded}
        />
      ) : (
        <ChallengeBoxNotActive>
          <strong>Inicie um ciclo para receber desafios</strong>
          <figure>
            <img src="icons/level-up.svg" alt="level up" />
            <figcaption> Avance de level completando os desafios.</figcaption>
          </figure>
        </ChallengeBoxNotActive>
      )}
    </ChallengeBoxContainer>
  );
}

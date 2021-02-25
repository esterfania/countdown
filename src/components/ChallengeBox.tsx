import { useContext } from 'react';
import styles from '../styles/components/ChallengeBox.module.css';
import {
  ChallengesContext,
} from '../contexts/ChallengesContext';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);
  return (
    <section className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <ChallengeBoxActive
          activeChallenge={activeChallenge}
          resetChallenge={resetChallenge}
        />
      ) : (
        <ChallengeBoxNotActive />
      )}
    </section>
  );
}

function ChallengeBoxNotActive() {
  return (
    <aside className={styles.challengeBoxNotActive}>
      <strong>Inicie um ciclo para receber desafios</strong>
      <figure>
        <img src='icons/level-up.svg' alt='level up' />
        <figcaption> Avance de level completando os desafios.</figcaption>
      </figure>
    </aside>
  );
}

function ChallengeBoxActive({ activeChallenge, resetChallenge }) {
  return (
    <aside className={styles.challengeActive}>
      <header>
        <strong>Ganhe {activeChallenge.amount} xp</strong>
      </header>
      <main>
        <figure>
          <img src={`icons/${activeChallenge.type}.svg`} alt='body' />
          <figcaption>
            <strong>Exercite-se</strong>
            <p>{activeChallenge.description}</p>
          </figcaption>
        </figure>
      </main>
      <footer>
        <button
          type='button'
          className={styles.challengeFailedButton}
          onClick={resetChallenge}
        >
          Falhei
        </button>
        <button type='button' className={styles.challengeSucceededButton}>
          Completei
        </button>
      </footer>
    </aside>
  );
}

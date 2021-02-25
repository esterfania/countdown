import { useContext } from 'react';
import styles from '../styles/components/ChallengeBox.module.css';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function ChallengeBox() {
  const contextData = useContext(ChallengesContext);
  console.log(contextData);
  const hasActiveChallenge = true;
  return (
    <section className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? <ChallengeBoxActive /> : <ChallengeBoxNotActive />}
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

function ChallengeBoxActive() {
  return (
    <aside className={styles.challengeActive}>
      <header>
        <strong>Ganhe 400 xp</strong>
      </header>
      <main>
        <figure>
          <img src='icons/body.svg' alt='body' />
          <figcaption>
            <strong>Exercite-se</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </figcaption>
        </figure>
      </main>
      <footer>
        <button type='button' className={styles.challengeFailedButton}>
          Falhei
        </button>
        <button type='button' className={styles.challengeSucceededButton}>
          Completei
        </button>
      </footer>
    </aside>
  );
}

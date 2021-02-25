import styles from '../styles/components/ChallengeBox.module.css';
import { CountdownButton, CountdownButtonEnum } from './CountdownButton';

export function ChallengeBox() {
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
            <p>
              É agora Ester, bora lá minha parça. Caminhe por 3 minutos e
              estique suas pernas pra você ficar saudável.
            </p>
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

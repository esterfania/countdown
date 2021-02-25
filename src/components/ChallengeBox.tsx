import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
  const hasActiveChallenge = true;
  return (
    <section className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? <ChallengeBoxNotActive /> : <div />}
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

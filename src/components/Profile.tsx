import styles from '../styles/components/Profile.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <section className={styles.profileContainer}>
      <img
        alt='Ester Gama'
        src='https://github.com/esterfania.png'
        className={styles.profileAvatarImage}
      />
      <div className={styles.profileText}>
        <strong>Ester Gama</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          <span>Level {level}</span>
        </p>
      </div>
    </section>
  );
}

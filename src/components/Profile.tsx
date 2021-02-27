import styles from '../styles/components/Profile.module.css';
import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <section className={styles.profileContainer}>
      <img
        alt='Julia Nogueira'
        src='https://user-images.githubusercontent.com/35200622/109367837-fad98c00-7875-11eb-91c1-6a0bbcfbf7cb.png'
        className={styles.profileAvatarImage}
      />
      <div className={styles.profileText}>
        <strong>Julia Nogueira</strong>
        <p>
          <img src='icons/level.svg' alt='Level' />
          <span>Level {level}</span>
        </p>
      </div>
    </section>
  );
}

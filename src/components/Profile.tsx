import styles from '../styles/components/Profile.module.css';

export function Profile() {
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
          <span>Level 1</span>
        </p>
      </div>
    </section>
  );
}

import styles from '../styles/components/Navbar.module.css';

export function Navbar() {
  return (
    <header className={styles.container}>
      <nav>
        <div className={`${styles.item} ${styles.logo}`}/>
        <div className={`${styles.item} ${styles.home}`} title='Home' />
        <div className={`${styles.item} ${styles.ranking}`} />
      </nav>
    </header>
  );
}

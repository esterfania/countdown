import styles from '../styles/components/ExperienceBar.module.css';
interface ExperienceBarProps {
  value: number;
}

export function ExperienceBar(props: ExperienceBarProps) {
  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: '50%' }}></div>
        <span className={styles.currentExperience} style={{ left: '50%' }}>
          {props.value} xp
        </span>
      </div>
      <span>600 xp</span>
    </header>
  );
}

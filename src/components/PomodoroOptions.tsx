import styles from '../styles/components/PomodoroOptions.module.css'

function PomodoroOptions() {
  return (
    <ul className={styles.pomodoroList}>
      <li className={`${styles.item} ${styles.active}`}>Pomodoro</li>
      <li className={styles.item}>Short break</li>
      <li className={styles.item}>Long break</li>
    </ul>
  );
}

export default PomodoroOptions;

import styles from '../styles/components/PomodoroOptions.module.css'

function PomodoroOptions() {
  return (
    <ul className={styles.pomodoroList}>
      <li>Pomodoro</li>
      <li>Short break</li>
      <li>Long break</li>
    </ul>
  );
}

export default PomodoroOptions;

import styles from '../styles/components/PomodoroOptions.module.css';
import { useState, MouseEvent } from 'react';

function PomodoroOptions() {
  const [currentOption, setCurrentOption] = useState<string>('pomodoro');

  const optionsHandlers = function (e: MouseEvent<HTMLUListElement>) {
    const targetOption = e.target as HTMLElement;
    const currentTargetOption = targetOption.dataset['option'];
    if (!currentTargetOption) return;
    setCurrentOption(currentTargetOption);
  };

  return (
    <ul className={styles.pomodoroList} onClick={optionsHandlers}>
      <li
        className={`${styles.item} ${
          currentOption === 'pomodoro' && styles.active
        }`}
        data-option="pomodoro"
      >
        Pomodoro
      </li>
      <li
        className={`${styles.item} ${
          currentOption === 'short-break' && styles.active
        }`}
        data-option="short-break"
      >
        Short break
      </li>
      <li
        className={`${styles.item} ${
          currentOption === 'long-break' && styles.active
        }`}
        data-option="long-break"
      >
        Long break
      </li>
    </ul>
  );
}

export default PomodoroOptions;
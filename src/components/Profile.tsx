import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengeContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/VictorLira-DEV.png" alt="Victor Lira" />
            <div>
                <strong>Victor Lira</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    level {level}
                </p>
            </div>
        </div>
    );
}
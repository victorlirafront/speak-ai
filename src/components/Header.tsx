import styles from '../styles/components/Header.module.css';
import Image from 'next/image';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Image width={30} height={30} src="/check-new.png" alt="check-icon" />
        <h1>Concentrate</h1>
      </div>
    </header>
  );
}

export default Header;

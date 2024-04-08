import styles from '../styles/components/Header.module.css';
import Image from 'next/image';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Image width={30} height={30} src="/check-new.png" alt="check-icon" />
        <h1>Concentrate</h1>
      </div>
      <div className={styles.controller}>
        <Image src={'/icons/settings.png'} alt="teste" width={30} height={30} />
        <p>Settings</p>
      </div>
    </header>
  );
}

export default Header;

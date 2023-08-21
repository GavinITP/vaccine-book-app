import Image from "next/image";
import styles from "./Navbar.module.css";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <Image
          src="/../logo.png"
          alt="Moh Prompt Mak logo"
          width="40"
          height="40"
        />
        <div>
          <p className={styles.logoHeading}>MPM</p>
          <p className={styles.logoParagraph}>Moh Promt Mak</p>
        </div>
      </div>

      <ul className={styles.menu}>
        <li>Home</li>
        <li>Platforms</li>
        <li>Statistics</li>
        <li>About</li>
        <Button>Contact Us</Button>
      </ul>
    </nav>
  );
};

export default Navbar;

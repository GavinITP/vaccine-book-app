import styles from "./Card.module.css";
import Image from "next/image";

const Card = () => {
  return (
    <div className={styles.card}>
      <Image
        src="/../../influenza.jpg"
        alt="influenza"
        width={400}
        height={250}
      />
      <div className={styles.cardBody}>
        <h3>The Importance of the Influenza Vaccine</h3>
        <p>
          Defend yourself and those around you against the seasonal flu with the
          Influenza Vaccine. Influenza, commonly known as the flu, is a
          contagious respiratory illness that can lead to severe symptoms and
          complications. The influenza vaccine is a crucial preventive measure
          that helps reduce the risk of infection and its associated
          complications. It's particularly important for vulnerable populations,
          such as the elderly, young children, and individuals with underlying
          health conditions. Take action today to safeguard your health and the
          well-being of your loved ones.
        </p>
      </div>
    </div>
  );
};

export default Card;

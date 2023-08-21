import Image from "next/image";
import Button from "./Button";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={`${styles.gridTwoCols} ${styles.banner}`}>
      <div>
        <p className={styles.bannerSub}>#1 vaccine booking app</p>
        <h1>Moh Promt Mak</h1>
        <p className={styles.bannerDesc}>
          Simplify vaccine booking across Thailand with our user-friendly app.
          Choose center, date, and time all in one place. Secure your
          vaccination slot effortlessly and contribute to a safer future.
        </p>
        <Button>Book Now</Button>
      </div>

      <Image
        src="/../../vaccine.jpg"
        className={styles.bannerImg}
        alt=""
        width={600}
        height={400}
        objectFit="contain"
      />
    </section>
  );
};

export default Banner;

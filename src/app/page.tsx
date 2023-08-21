import Banner from "@/components/Banner";
import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div>
      <header className={styles.bg}>
        <Navbar />
        <Banner />
      </header>
      <main>
        <h2 className={styles.mainHeading}>Information Center</h2>
        <Card />
      </main>
    </div>
  );
};

export default Home;

import Reveal from "../Reveal";
import SectionScroll from "../Scroller/Scroller";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.home} id="home">
      <div className={styles.content}>
        <Reveal width="100%">
          <div className={styles.welcome}>
            <h1 className={styles.subtext}>Welcome.</h1>
            <h1 className={styles.maintext}>My name is Szymon,</h1>
            <h1 className={styles.subtext}>a web developer.</h1>
          </div>
        </Reveal>

        <SectionScroll section="#about" />
      </div>
    </section>
  );
};

export default Home;

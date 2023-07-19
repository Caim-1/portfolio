import Description from "./Description";
import NewTech from "./NewTech";
import SectionScroll from "../Scroller/Scroller";
import Reveal from "../Reveal";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className="section" id="about">
      <Reveal>
        <div className={styles.content}>
          <h1 className="section--header">About me</h1>
          <div className={styles.container}>
            <Description />
            <NewTech />
          </div>
        </div>
      </Reveal>

      <SectionScroll section="#projects" />
    </section>
  );
};

export default About;

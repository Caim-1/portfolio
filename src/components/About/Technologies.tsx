import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiCsharp,
  SiReact,
  SiNextdotjs,
  SiDotnet,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiFirebase,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiMui,
  SiGit,
} from "react-icons/si";
import styles from "./About.module.css";

export default function Technologies() {
  return (
    <div className={styles.technologies}>
      <h1 className={styles.heading}>Languages</h1>
      <div className={styles.techContainer}>
        <div className={styles.item}>
          <SiHtml5 />
          <span>HTML</span>
        </div>
        <div className={styles.item}>
          <SiCss3 />
          <span>CSS</span>
        </div>
        <div className={styles.item}>
          <SiJavascript />
          <span>JavaScript</span>
        </div>
        <div className={styles.item}>
          <SiTypescript />
          <span>TypeScript</span>
        </div>
        <div className={styles.item}>
          <SiCsharp />
          <span>C#</span>
        </div>
      </div>

      <h1 className={styles.heading}>Frameworks</h1>
      <div className={styles.techContainer}>
        <div className={styles.item}>
          <SiReact />
          <span>React.js</span>
        </div>
        <div className={styles.item}>
          <SiNextdotjs />
          <span>Next.js</span>
        </div>
        <div className={styles.item}>
          <SiDotnet />
          <span>.NET</span>
        </div>
      </div>

      <h1 className={styles.heading}>Backend</h1>
      <div className={styles.techContainer}>
        <div className={styles.item}>
          <SiMongodb />
          <span>MongoDB</span>
        </div>
        <div className={styles.item}>
          <SiPostgresql />
          <span>PostgreSQL</span>
        </div>
        <div className={styles.item}>
          <SiExpress />
          <span>Express.js</span>
        </div>
        <div className={styles.item}>
          <SiFirebase />
          <span>Firebase</span>
        </div>
      </div>

      <h1 className={styles.heading}>Other</h1>
      <div className={styles.techContainer}>
        <div className={styles.item}>
          <SiBootstrap />
          <span>Bootstrap</span>
        </div>
        <div className={styles.item}>
          <SiTailwindcss />
          <span>Tailwind</span>
        </div>
        <div className={styles.item}>
          <SiNodedotjs />
          <span>Node.js</span>
        </div>
        <div className={styles.item}>
          <SiMui />
          <span>Material UI</span>
        </div>
        <div className={styles.item}>
          <SiGit />
          <span>Git</span>
        </div>
      </div>
    </div>
  );
}

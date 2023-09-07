import styles from "./About.module.css";
import Bootstrap from "@/assets/logos/Bootstrap.svg";
import HTML5 from "@/assets/logos/HTML5.svg";
import React from "@/assets/logos/React.svg";
import CSS3 from "@/assets/logos/CSS3.svg";
import express from "@/assets/logos/express.svg";
import JavaScript from "@/assets/logos/JavaScript.svg";
import MongoDB from "@/assets/logos/MongoDB.svg";
import Next from "@/assets/logos/Next.svg";
import PostgreSQL from "@/assets/logos/PostgreSQL.svg";
import Tailwind from "@/assets/logos/Tailwind.svg";
import TS from "@/assets/logos/TS.svg";

export default function Technologies() {
  return (
    <div className={styles.technologies}>
      <div className={styles.techContainer}>
        <div className={styles.item}>
          <img src={HTML5} alt="HTML5 logo" />
          <span>HTML5</span>
        </div>
        <div className={styles.item}>
          <img src={CSS3} alt="CSS3 logo" />
          <span>CSS3</span>
        </div>
        <div className={styles.item}>
          <img src={JavaScript} alt="JavaScript logo" />
          <span>JavaScript</span>
        </div>
        <div className={styles.item}>
          <img src={TS} alt="TypeScript logo" />
          <span>TypeScript</span>
        </div>
        <div className={styles.item}>
          <img src={React} alt="React logo" />
          <span>React</span>
        </div>
        <div className={styles.item}>
          <img src={Next} alt="Next logo" />
          <span>Next</span>
        </div>
        <div className={styles.item}>
          <img src={Bootstrap} alt="Bootstrap logo" />
          <span>Bootstrap</span>
        </div>
        <div className={styles.item}>
          <img src={Tailwind} alt="Tailwind logo" />
          <span>Tailwind</span>
        </div>
        <div className={styles.item}>
          <img src={PostgreSQL} alt="PostgreSQL logo" />
          <span>PostgreSQL</span>
        </div>

        <div className={styles.item}>
          <img src={MongoDB} alt="MongoDB logo" />
          <span>MongoDB</span>
        </div>

        <div className={styles.item}>
          <img src={express} alt="Express js logo" />
          <span>express</span>
        </div>
      </div>
    </div>
  );
}

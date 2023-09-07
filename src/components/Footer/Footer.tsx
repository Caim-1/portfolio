import { MdKeyboardArrowUp } from "react-icons/md";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { contactLinks } from "../../constants";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a href="#home" aria-label="Scroll to top of the page">
          <div className={styles.scroller}>
            <MdKeyboardArrowUp />
          </div>
        </a>
      </div>
      <div className={styles.content}>
        <div className={styles.icons}>
          <a
            href={contactLinks.gitHub}
            target="_blank"
            aria-label="Visit my GitHub profile"
          >
            <SiGithub size={30} className={styles.icon} />
          </a>
          <a
            href={contactLinks.gitHub}
            target="_blank"
            aria-label="Visit my LinkedIn profile"
          >
            <SiLinkedin size={30} className={styles.icon} />
          </a>
        </div>
        <span>Szymon Siudzinski @2023</span>
      </div>
    </footer>
  );
};

export default Footer;

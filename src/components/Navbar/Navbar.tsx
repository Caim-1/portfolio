import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.home}>
        <a href="#home" aria-label="Navigate to the Home section">
          HOME
        </a>
      </div>
      <div className={styles.links}>
        <a href="#about" aria-label="Navigate to the About section">
          ABOUT
        </a>
        <a href="#projects" aria-label="Navigate to the Projects section">
          PROJECTS
        </a>
        <a href="#contact" aria-label="Navigate to the Contact section">
          CONTACT
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

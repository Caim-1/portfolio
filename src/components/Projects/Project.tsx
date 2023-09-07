import Reveal from "../Reveal";
import { SiGithub } from "react-icons/si";
import styles from "./Projects.module.css";

type Props = {
  title: string;
  img: string;
  demoUrl: string;
  githubUrl: string;
  description: string;
  tags: string[];
};

const Project = ({
  title,
  img,
  demoUrl,
  githubUrl,
  description,
  tags,
}: Props) => {
  return (
    <Reveal>
      <div className={styles.item}>
        <a
          href={demoUrl}
          target="_blank"
          aria-label="View a demonstartion of the project"
        >
          <img className={styles.image} src={img} alt="Project image" />
        </a>

        <div className={styles.titleContainer}>
          <h3 className={styles.title}>{title}</h3>

          <a
            href={demoUrl}
            target="_blank"
            aria-label="View a demonstartion of the project"
          >
            Demo
          </a>

          <a
            href={githubUrl}
            target="_blank"
            aria-label="Go to the project's GitHub repository"
          >
            <SiGithub size={25} className={styles.icon} />
          </a>
        </div>

        <p className={styles.description}>{description}</p>

        <div className={styles.tags}>
          <ul className={styles.tagList}>
            {tags.map((tag, index) => (
              <li key={index}>#{tag}</li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
};

export default Project;

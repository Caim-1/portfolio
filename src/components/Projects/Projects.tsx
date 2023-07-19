import Project from "./Project";
import SectionScroll from "../Scroller/Scroller";
import { projects } from "../../constants";
import styles from "./Projects.module.css";
import Reveal from "../Reveal";

const Projects = () => {
  return (
    <section className="section" id="projects">
      <Reveal>
        <div className={styles.content}>
          <h1 className="section--header">Projects</h1>
          <div className={styles.container}>
            {projects.map((project, i) => (
              <Project
                key={i}
                title={project.title}
                img={project.img}
                demoUrl={project.demoUrl}
                githubUrl={project.githubUrl}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </Reveal>

      <SectionScroll section="#contact" />
    </section>
  );
};

export default Projects;

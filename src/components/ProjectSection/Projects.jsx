import { ProjectCard } from './ProjectCard'
import projects from '../../data/projects.js'
import styles from './Projects.module.css';

export const Projects = () => {
  return (
    <section className={styles.projectsContainer} id="projects">
      <div className={styles.divider}></div>
      <h2 className={styles.projectsTitle}>Projects</h2>
      <div className={styles.projectsList}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
}

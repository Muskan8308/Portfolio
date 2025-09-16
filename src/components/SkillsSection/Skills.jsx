import React from 'react'
import styles from "./Skills.module.css";
import skills from "../../data/skills.js";


export const Skills = () => {
  return (
    <section>
      <div className={styles.container} id="skills">
        <h1 id={styles.title}>Skills</h1>

        <div className={styles.subContainer}>
          <h2 className={styles.subtitle}>Frontend Skills </h2>
          <div className={styles.skillContainer}>
            {skills.frontend.map((skill, idx) => (
              <div id={idx} className={styles.eachSkills}>
                <img
                  src={skill.imageSrc}
                  className={styles.skillImage}
                  alt={skill.name}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.subContainer}>
          <h2 className={styles.subtitle}>Backend Skills </h2>
          <div className={styles.skillContainer}>
            {skills.backend.map((skill, idx) => (
              <div id={idx} className={styles.eachSkills}>
                <img
                  src={skill.imageSrc}
                  className={styles.skillImage}
                  alt={skill.name}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.subContainer}>
          <h2 className={styles.subtitle}>Programming Languages</h2>
          <div className={styles.skillContainer}>
            {skills.languages.map((skill, idx) => (
              <div id={idx} className={styles.eachSkills}>
                <img
                  src={skill.imageSrc}
                  className={styles.skillImage}
                  alt={skill.name}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.subContainer}>
          <h2 className={styles.subtitle}>Version Control & Tools </h2>
          <div className={styles.skillContainer}>
            {skills.tools.map((skill, idx) => (
              <div id={idx} className={styles.eachSkills}>
                <img
                  src={skill.imageSrc}
                  className={styles.skillImage}
                  alt={skill.name}
                />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

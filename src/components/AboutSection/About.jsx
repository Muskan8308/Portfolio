import React from "react";
import styles from "./About.module.css";
import illustration from "../../assets/hero/aboutProfile.png";
// <-- place the SVG here (or PNG) at this path

export const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.divider}></div>
      <div className={styles.container}>
        {/* Left: Illustration */}
        <div className={styles.left}>
          <div className={styles.imgWrap}>
            <img
              src={illustration}
              alt="Programmer Illustration"
              className={styles.image}
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className={styles.right}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.lead}>
            Hi, I’m <span className={styles.accent}>Muskan Chourasia</span> — a
            final-year Computer Science student passionate about building
            production-ready web applications.
          </p>

          <p className={styles.body}>
            I enjoy transforming ideas into fast, accessible, and beautiful user
            experiences using <span className={styles.accent}>React</span> on
            the frontend and <span className={styles.accent}>Spring Boot</span>{" "}
            on the backend (currently learning). I’ve solved{" "}
            <strong>345+</strong> DSA problems on LeetCode and earned the{" "}
            <strong>365-Day Consistency Badge</strong>, which reflects my
            dedication to continuous problem-solving and learning.
          </p>

          <p className={styles.body}>
            Currently, I’m focused on becoming a well-rounded{" "}
            <span className={styles.accent}>Full-Stack Java Developer</span> and
            preparing for placements. I believe in writing clean, maintainable
            code and collaborating effectively on real-world projects.
          </p>

          <div className={styles.ctaRow}>
            <a className={styles.primaryBtn} href="#projects">
              See Projects
            </a>
            <a className={styles.outlineBtn} href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

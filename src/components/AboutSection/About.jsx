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
            pre-final year Computer Science student who builds production-ready
            web applications.
          </p>

          <p className={styles.body}>
            I enjoy turning ideas into fast, accessible, and beautiful user
            experiences using <span className={styles.accent}>React</span> on
            the frontend and <span className={styles.accent}>Spring Boot</span>{" "}
            on the backend. I’ve solved <strong>300+</strong> DSA problems on
            LeetCode and regularly participate in coding contests to sharpen my
            problem solving.
          </p>

          <p className={styles.body}>
            Currently focused on becoming a well-rounded{" "}
            <span className={styles.accent}>Full-Stack Java Developer</span> and
            preparing for placements. I write clean, tested code and enjoy
            collaborating on real-world projects.
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

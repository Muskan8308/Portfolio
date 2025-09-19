import React from "react";
import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroImage2.jpg";

export const Hero = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hiii, I'm Muskan Chourasia</h1>
          <p className={styles.description}>
            I'm a Frontend, Backend and a Java developer. Reach out to me if you
            like to collaborate with me :
          </p>
          <a
            className={styles.contactBtn}
            href="https://drive.google.com/file/d/1sRDDcGdTUK7bbbGQin-HW4Lk9getjVg6/view?usp=sharing"
          >
            Get Resume
          </a>
        </div>
        <img src={heroImage} alt="Hero Image" className={styles.heroImg} />
        <div className={styles.topBlur} />
        {/* <div className={styles.bottomBlur} /> */}
      </section>
    </>
  );
};

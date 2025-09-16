import React from 'react'
import styles from "./Education.module.css";

export const Education = () => {

  const educationData = [
    {
      degree: "B.TECH",
      institution: "Baderia Global Institute of Engineering and Management",
      year: "2022 - 2026",
      result: "7.51 CGPA",
    },
    {
      degree: "12th Grade",
      institution: "St. Norbert Girls Higher Secondary School",
      year: "2021 - 2022",
      result: "83.4%",
    },
    {
      degree: "10th Grade",
      institution: "St. Norbert Girls Higher Secondary School",
      year: "2019 - 2020",
      result: "84.33%",
    },
  ];


  return (
    <section className={styles.container} id="education">

      <h3 className={styles.title}>Education</h3>
      <div className={styles.timeline}>
        {
          educationData.map((edu, idx) => (
            <div id={idx} 
              className={`${styles.timelineItem} ${idx % 2 == 0 ? styles.left : styles.right}`} 
              key={idx}>
              
              <div className={styles.dot}></div>
              <div className={styles.content}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <h4 className={styles.institution}>{edu.institution}</h4>
                <p className={styles.year}>{edu.year}</p>
                <p className={styles.result}>{edu.result}</p>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

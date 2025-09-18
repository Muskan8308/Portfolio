import React from 'react'
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.divider}></div>

      <div className={styles.footer}>
        <p className={styles.footerText}>
          © 2025 Muskan Chourasia. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer
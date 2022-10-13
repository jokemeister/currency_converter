import React from "react";

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.text}>Made By Daniil Dubrovskyi</p>
      </div>
    </footer>
  );
};

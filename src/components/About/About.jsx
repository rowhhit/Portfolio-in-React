import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/char2.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              As a frontend developer, I excel in engineering visually stunning, lightning-fast websites that adapt flawlessly to any screen size. 
              My expertise lies in delivering immersive user experiences that captivate and convert.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              As a backend developer, I specialize in crafting blazing-fast and impeccably optimized backend systems and APIs. 
              My expertise lies in engineering robust solutions that scale effortlessly to meet the demands of today's dynamic digital landscape.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

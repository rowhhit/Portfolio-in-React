import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="skillsandeduaction">
      <h2 className={styles.title}>Skills And Education</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        
        <ul className={styles.history}>
          {history.map((historyItem, id) => 
          {
            return (
              <li key={id} className={styles.historyItem}>
              
                <div className={styles.historyItemDetails}>
                  <h3>{historyItem.degree}</h3>
                  <h3>{historyItem.organisation}</h3>
                  <h3>{historyItem.location}</h3>

                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>

                </div>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
};

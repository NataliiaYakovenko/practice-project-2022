import React from 'react';
import firstNamingPlatform from './firstNamingPlatform.json';
import styles from './FirstNamingPlatformList.module.sass';

const FirstNamingPlatformList = () => {
  return (
    <>
      <div className={styles.namingPlatformListContainer}>
        <h2>World's #1 Naming Platform</h2>
        <ul className={styles.namingPlatformList}>
          {firstNamingPlatform.map((c, i) => {
            return (
              <li key={i}>
                <div className={styles.namingPlatformArticle}>
                  <img src={c.iconSrc} alt={c.title} />
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default FirstNamingPlatformList;

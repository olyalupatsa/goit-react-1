import React from "react";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profile}> 
      <img src={image} alt="User avatar" className={styles.avatar} /> 
      <p className={styles.name}>{name}</p> 
      <p className={styles.tag}>@{tag}</p> 
      <p className={styles.location}>{location}</p> 

      <ul className={styles.stats}> 
        
        <li className={styles.stat}>
          <span>Followers</span>
          <strong>{stats.followers}</strong>
        </li>
        <li className={styles.stat}>
          <span>Views</span>
          <strong>{stats.views}</strong> 
        </li>
        <li className={styles.stat}>
          <span>Likes</span>
          <strong>{stats.likes}</strong> 
        </li>
      </ul>
    </div>
  );
};

export default Profile;

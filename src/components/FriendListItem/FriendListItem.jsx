import React from "react";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.friendListItem}> 
      <img src={avatar} alt="Friend avatar" width="48" className={styles.avatar} /> 
      <p className={styles.name}>{name}</p> 
      <p className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>
        {isOnline ? 'Online' : 'Offline'}
      </p> 
    </li>
  );
};

export default FriendListItem;

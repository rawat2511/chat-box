import React from "react";
import createIcon from "../assets/newChatbox.jpg";
import styles from "./sidebarHead.module.css";

export const SidebarHead = () => {
  return (
    <div className={styles.container}>
      <button className={styles.btn}>
        New Chatbox
        <img
          className={styles.image}
          src={createIcon}
          alt="Create new chatbox"
        />
      </button>
    </div>
  );
};

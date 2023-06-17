import React from "react";
import styles from "./sidebar.module.css";
import { ChatbotList } from "./ChatbotList";

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ChatbotList />
    </div>
  );
};

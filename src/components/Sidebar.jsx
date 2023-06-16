import React from "react";
import styles from "./sidebar.module.css";
import { SidebarHead } from "./sidebarHead";
import { ChatbotList } from "./ChatbotList";

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <SidebarHead />
      <ChatbotList />
    </div>
  );
};

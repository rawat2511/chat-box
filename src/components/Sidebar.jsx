import React from "react";
import styles from "./sidebar.module.css";
import { SidebarHead } from "./sidebarHead";

export const Sidebar = () => {
  return (
    <div className={styles.container}>
      <SidebarHead />
    </div>
  );
};

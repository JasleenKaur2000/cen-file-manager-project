import React from "react";
import styles from "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className={styles.header}>
      <div>
        <div>Logo Tree</div>
        Lock
      </div>
      <div>
        Resizer
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;

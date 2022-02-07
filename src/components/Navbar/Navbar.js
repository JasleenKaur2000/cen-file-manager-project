import React from "react";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <div className={styles.header}>
      <nav className={styles.menu}>
        <form className={styles.search_bar}>
          <input type="text" placeholder="Search files and folders" />
          <button>Search</button>
        </form>
        <ul>
          <li className="settings">
            <a href="#">Settings</a>
          </li>
          <li className="add-file">
            <a href="#">Add files</a>
          </li>
          <li className="modes">
            <a href="#">Modes</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

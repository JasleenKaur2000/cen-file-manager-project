import React from "react";
import styles from "./Navbar.module.scss";
import { FiSearch, FiSettings } from "react-icons/fi";
import { MdOutlineLightMode, MdAdd } from "react-icons/md";

export default function Navbar() {
  return (
    <div className={styles.header}>
      <nav className={styles.menu}>
        <form className={styles.search_bar}>
          <input type="text" placeholder="Search files and folders" />
          <button>
            <FiSearch />
          </button>
        </form>
        <ul>
          <li>
            <a href="#">
              <FiSettings />
            </a>
          </li>
          <li>
            <a href="#">
              <MdAdd />
            </a>
          </li>
          <li>
            <a href="#">
              <MdOutlineLightMode />
              Light Mode
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

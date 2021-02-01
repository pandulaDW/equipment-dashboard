import React from "react";
import Logo from "../images/logo.jpg";
import styles from "../styles/header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Equipment Dashboard</h1>
          <p>Stats for 250 latest equipments</p>
        </div>
        <img src={Logo} alt="store logo" />
      </div>
    </div>
  );
};

export default Header;

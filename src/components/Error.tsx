import React from "react";
import ErrorSign from "../images/ErrorSign.png";
import styles from "../styles/error.module.scss";

interface Props {
  text: string;
}

const Error: React.FC<Props> = ({ text }) => {
  return (
    <div className={styles.container}>
      <img src={ErrorSign} alt="Error sign" />
      <div className={styles.text}>
        <h1>Error!</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Error;

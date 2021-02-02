import React from "react";
import styles from "../styles/cards.module.scss";

interface Props {
  title: string;
  description: string;
  icon: JSX.Element;
  value: number | undefined;
}

const InfoCard: React.FC<Props> = ({ title, description, value, icon }) => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <h1>{value}</h1>
    </div>
  );
};

export default InfoCard;

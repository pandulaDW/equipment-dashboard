import React from "react";
import styles from "../styles/cards.module.scss";

interface Props {
  title: string;
  description: string;
  value: number;
}

const InfoCard: React.FC<Props> = ({ title, description, value }) => {
  return (
    <div className={styles.infoContainer}>
      <h3>{title}</h3>
      <p>{description}</p>
      <h1>{value}</h1>
    </div>
  );
};

export default InfoCard;

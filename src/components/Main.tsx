import React from "react";
import { FcNews, FcServices } from "react-icons/fc";
import InfoCard from "./InfoCard";
import styles from "../styles/main.module.scss";
import BarGraph from "./BarGraph";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <InfoCard
          title="Operational Items"
          description="Number of opeartional items"
          icon={<FcServices />}
          value={27}
        />
        <InfoCard
          title="Non Operational Items"
          description="Number of non-opeartional items"
          icon={<FcNews />}
          value={32}
        />
      </div>
      <div className={styles.chart}>
        <BarGraph />
      </div>
    </div>
  );
};

export default Main;

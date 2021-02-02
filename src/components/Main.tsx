import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcNews, FcServices } from "react-icons/fc";
import InfoCard from "./InfoCard";
import BarGraph from "./BarGraph";
import { fetchEquipmentData } from "../redux/equipments";
import { RootState } from "../redux/_store";
import styles from "../styles/main.module.scss";

const Main = () => {
  const dispatch = useDispatch();
  const { OpItemCount, NonOpItemCount, EquipmentCount } = useSelector(
    (state: RootState) => state.equipments
  );

  useEffect(() => {
    dispatch(fetchEquipmentData());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <InfoCard
          title="Operational Items"
          description="Number of opeartional items"
          icon={<FcServices />}
          value={OpItemCount}
        />
        <InfoCard
          title="Non Operational Items"
          description="Number of non-opeartional items"
          icon={<FcNews />}
          value={NonOpItemCount}
        />
      </div>
      <div className={styles.chart}>
        {Object.keys(EquipmentCount).length && (
          <BarGraph data={EquipmentCount} />
        )}
      </div>
    </div>
  );
};

export default Main;

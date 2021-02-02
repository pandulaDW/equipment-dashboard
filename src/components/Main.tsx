import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcNews, FcServices } from "react-icons/fc";
import InfoCard from "./InfoCard";
import BarGraph from "./BarGraph";
import Loader from "./Loader";
import { fetchEquipmentData } from "../redux/equipments";
import { RootState } from "../redux/_store";
import styles from "../styles/main.module.scss";

const Main = () => {
  const dispatch = useDispatch();
  const {
    OpItemCount,
    NonOpItemCount,
    EquipmentCount,
    loading,
    errorMsg,
  } = useSelector((state: RootState) => state.equipments);

  // fetching the data at initial loading
  useEffect(() => {
    dispatch(fetchEquipmentData());
    // eslint-disable-next-line
  }, []);

  let renderedElement: JSX.Element;
  if (loading) {
    renderedElement = <Loader />;
  } else if (errorMsg) {
    renderedElement = <h1>Error</h1>;
  } else {
    renderedElement = (
      <div className={styles.chart}>
        <BarGraph data={EquipmentCount} />)
      </div>
    );
  }

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
      {renderedElement}
    </div>
  );
};

export default Main;

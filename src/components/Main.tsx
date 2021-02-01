import React from "react";
import InfoCard from "./InfoCard";

const Main = () => {
  return (
    <div>
      <InfoCard
        title="Operational Items"
        description="Displays the number of opeartional items"
        value={23.3}
      />
      <InfoCard
        title="Non Operational Items"
        description="Displays the number of opeartional items"
        value={23.3}
      />
    </div>
  );
};

export default Main;

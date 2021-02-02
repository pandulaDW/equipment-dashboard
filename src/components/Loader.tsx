import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div>
      <ScaleLoader
        color="#F5A623"
        width={6}
        radius={5}
        height={50}
        margin={5}
      />
    </div>
  );
};

export default Loader;

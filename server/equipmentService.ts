import { Equipment } from "./resTypes";

// defines the return type of the equipment service
interface ServiceReturnType {
  OpItemCount: number;
  NonOpItemCount: number;
  EquipmentCount: { [key: string]: number };
}

// converts the api response to an appropriate model to be used by the client
export const equipmentService = (data: Equipment[]) => {
  const equipmentInfo: ServiceReturnType = {
    OpItemCount: 0,
    NonOpItemCount: 0,
    EquipmentCount: {},
  };

  data.forEach((item) => {
    const { AssetCategoryID, OperationalStatus } = item;
    if (OperationalStatus === "Operational") {
      equipmentInfo.OpItemCount += 1;
    }

    if (OperationalStatus === "Non-Operational") {
      equipmentInfo.NonOpItemCount += 1;
    }

    if (AssetCategoryID in equipmentInfo.EquipmentCount) {
      equipmentInfo.EquipmentCount[AssetCategoryID] += 1;
    } else {
      equipmentInfo.EquipmentCount[AssetCategoryID] = 0;
    }
  });

  return equipmentInfo;
};

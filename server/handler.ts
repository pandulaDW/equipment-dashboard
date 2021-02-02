import axios from "axios";
import { Handler } from "express";
import { myCache } from "./server";
import { equipmentService } from "./equipmentService";
import { Equipment, SuccessResponse, ErrorResponse } from "./resTypes";

// modifying the url using the given parameters
const modifyUrl = (max: number, last: number): string => {
  const apiKey = "SC:demo:64a9aa122143a5db";
  return `http://ivivaanywhere.ivivacloud.com/api/Asset/Asset/All?apikey=${apiKey}&max=${max}&last=${last}`;
};

// fetchData will fetch the data from API at multiple steps. 5 requests will be made, where
// each request will fetch 50 equipments.
const fetchData = async (): Promise<SuccessResponse | ErrorResponse> => {
  const equipments: Equipment[] = [];
  for (let i = 0; i < 5; i++) {
    try {
      const response = await axios.get(modifyUrl(50, i * 50));
      const equipmentsPerRequest = response.data as Equipment[];
      equipments.push(...equipmentsPerRequest);
    } catch (err) {
      return {
        status: "failure",
        message: `Error in fetching equipments. ${err.response.data}`,
      };
    }
  }
  return { status: "success", body: equipments };
};

// equipment route handler will fetch the data from the api or use the cache to retrieve the data.
// If the cache is expired, time to live will be set to one hour
export const equipmentHandler: Handler = async (_, res) => {
  let equipments: Equipment[] | undefined;
  equipments = myCache.get("equipments");
  if (equipments === undefined) {
    const response = await fetchData();
    if (response.status === "failure") {
      return res.status(500).json(response);
    }
    equipments = response.body;
    myCache.set("equipments", equipments, 60 * 60);
  }
  const equipmentServiceResponse = equipmentService(equipments);
  res.status(200).json(equipmentServiceResponse);
};

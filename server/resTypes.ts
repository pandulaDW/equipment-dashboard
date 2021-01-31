import { Equipment } from "../src/models/equipmentModels";

interface ErrorResponse {
  message: string;
}

// defines the response body of the fetchData function
export interface FetchResponseType {
  status: "success" | "failure";
  body: Equipment[] | ErrorResponse;
}

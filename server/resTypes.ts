import { Equipment } from "../src/models/equipmentModels";

// defines the ErrorResponse for data fetching
export interface ErrorResponse {
  status: "failure";
  message: string;
}

// defines the SuccessResponse for data fetching
export interface SuccessResponse {
  status: "success";
  body: Equipment[];
}

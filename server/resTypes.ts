export interface Equipment {
  AssetCategoryID: string;
  AssetID: string;
  __rowid__: number;
  OperationalStatus: "Operational" | "Non-Operational";
}

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

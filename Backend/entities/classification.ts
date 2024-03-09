import { helpers, statusCode } from "../lib";
import { Classifications } from "../types";

export const classificationEntity = {
  listClassification: async (): Promise<Classifications[] | null> => {
    let data;
    try {
      const filename = "classifications.json";
      data = helpers.readJSONGeneric(filename);
    } catch (e) {
      data.classifications = [];
      console.log("error", e);
    }

    return data.classifications;
  },
};

import { helpers, statusCode } from "../lib";
import { ListBusinessDto } from "../types/businessDto";

export const businessesEntity = {
  listBusinesses: async (): Promise<ListBusinessDto> => {
    let businesses;
    try {
      const filename = "businesses.json";
      businesses = helpers.readJSON(filename);
    } catch (e) {
      businesses = [];
      console.log("error", e);
    }

    return businesses;
  },
};

import { helpers, statusCode } from "../lib";
import { Locations } from "../types";

export const locationsEntity = {
  listLocations: async (): Promise<Locations[] | null> => {
    let data;
    try {
      const filename = "locations.json";
      data = helpers.readJSONGeneric(filename);
    } catch (e) {
      data.locations = [];
      console.log("error", e);
    }

    return data.locations;
  },
};

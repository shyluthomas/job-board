import fs from "fs";
import path from "path";

export const helpers = {
  readJSON: (filename: string) => {
    const final_path = path.resolve("../sample_data", filename);
    const rawdata = fs.readFileSync(final_path);
    let data = JSON.parse(rawdata.toString());
    return data.businesses;
  },
  readJSONGeneric: (filename: string) => {
    const final_path = path.resolve("../sample_data", filename);
    const rawdata = fs.readFileSync(final_path);
    let data = JSON.parse(rawdata.toString());
    return data;
  },
};

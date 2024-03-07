import express from "express";
import { locationsEntity } from "../entities/locations";
import { locationController } from "../controllers";
export const locationRoute = express.Router();

locationRoute.get("/", async (_req, res) => {
  const response: any = await locationController.getlocation();
  res.status(response.status).send(response);
});

locationRoute.post("/get_location", async (req, res) => {
  const locations = req.body?.locations;
  const response: any = await locationController.getLocationByIds(locations);
  res.status(response.status).send(response);
});


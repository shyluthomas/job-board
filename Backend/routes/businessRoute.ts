import express from "express";
import { businessController } from "../controllers";
export const businessRoute = express.Router();

businessRoute.get("/", async (_req, res) => {
  const response: any = await businessController.getBusinesses();
  res.status(response.status).send(response);
});


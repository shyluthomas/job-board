import express from "express";
import { classificationController } from "../controllers";
export const classificationsRoute = express.Router();

classificationsRoute.get("/", async (_req, res) => {
  const response: any = await classificationController.geclassification();
  res.status(response.status).send(response);
});

classificationsRoute.post("/get_classification", async (req, res) => {
  const classifications = req.body?.classifications;
  const response: any = await classificationController.geclassificationByIds(
    classifications
  );
  res.status(response.status).send(response);
});

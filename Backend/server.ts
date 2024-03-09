import express from "express";
import { businessRoute, healthRoute } from "./routes";
import { logger, errorHandler } from "./middlewares";
import cors = require("cors");
import { classificationsRoute } from "./routes/classificationsRoute";
import { locationRoute } from "./routes/locationRoute";

export const app = express();
export const startServer = () => {
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true,
      limit: 52428800,
      parameterLimit: 1000000,
    })
  );

  app.use(logger);
  app.use((req, res, next) => {
    next();
  }, cors({ maxAge: 84600 }));
  app.use("/health", healthRoute);
  app.use("/business", businessRoute);
  app.use("/classification", classificationsRoute);
  app.use("/location", locationRoute);

  /* Handling Error */
  app.use(errorHandler);

  return app;
};

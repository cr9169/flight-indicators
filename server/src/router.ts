import { Router } from "express";
import indicatorsRouter from "./Indicators/router";
import { Request, Response } from "express";

const serverRouter = Router();

serverRouter.use("/api", indicatorsRouter);

serverRouter.use(
  ["/isAlive", "/isalive", "/health"],
  (_req: Request, res: Response) => {
    res.status(200).send("alive");
  }
);

serverRouter.use("*", (_req: Request, res: Response) => {
  res.status(404).send("Invalid Route");
});

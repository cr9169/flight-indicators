import { Router } from "express";
import IndicatorsController from "./controller";
import * as validationSchemas from "./validation";
import validateSchema from "../utils/schemaValidator";

const indicatorsRouter = Router();

indicatorsRouter.put(
  "/indicators",
  validateSchema(validationSchemas.updateIndicatorsSchema),
  IndicatorsController.updateIndicators
);

export default indicatorsRouter;

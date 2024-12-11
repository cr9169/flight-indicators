import { IndicatorsModel } from "./model";
import { Indicators } from "./interface";
import { Request, Response, NextFunction } from "express";
import { TypedRequest } from "../utils/advencedTypes";
import * as validationSchemas from "./validation";
import * as errors from "../utils/customErrors";
import { asyncHandler } from "../utils/wrappers";

class IndicatorsController {
  static getIndicators = asyncHandler(
    async (_req: Request, res: Response, _next: NextFunction) => {
      const indicators = await IndicatorsModel.findOne({});

      if (!indicators) return new errors.NotFoundError();

      res.json(indicators).status(200);
    }
  );

  static updateIndicators = asyncHandler(
    async (
      req: TypedRequest<typeof validationSchemas.updateIndicatorsSchema>,
      res: Response,
      _next: NextFunction
    ) => {
      const indicators = await IndicatorsModel.findOne({});

      if (!indicators) return new errors.NotFoundError();

      const newIndicators = await IndicatorsModel.findByIdAndUpdate(
        indicators._id,
        req.body,
        {
          new: true,
        }
      );

      res.json(newIndicators).status(200);
    }
  );
}

export default IndicatorsController;

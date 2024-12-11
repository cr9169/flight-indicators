import { IndicatorsModel } from "./model";
import { Indicators } from "./interface";
import { Request, Response, NextFunction } from "express";
import { TypedRequest } from "../utils/advencedTypes";
import * as validationSchemas from "./validation";
import * as errors from "../utils/customErrors";
import { asyncHandler } from "../utils/wrappers";

/**
 * Controller for managing flight indicators.
 *
 * This controller provides methods for:
 * - Retrieving the current indicators from the database.
 * - Updating the indicators in the database.
 *
 * The methods handle HTTP requests and responses, ensuring proper validation,
 * error handling, and interaction with the `IndicatorsModel`.
 *
 * Methods:
 * - `getIndicators`: Fetches the first indicators document from the database.
 * - `updateIndicators`: Updates the indicators document with new data provided by the client.
 *
 * Error Handling:
 * - Throws a `NotFoundError` if the indicators document does not exist.
 */
class IndicatorsController {
  /**
   * Retrieves the indicators document from the database.
   *
   * - Searches for the first indicators document in the database.
   * - If the document is not found, throws a `NotFoundError`.
   * - If found, returns the document in the response with status 200.
   *
   * @param _req - The incoming HTTP request (not used in this method).
   * @param res - The HTTP response object used to send back the indicators document.
   * @param _next - The next middleware function (not used in this method).
   * @throws {NotFoundError} If no indicators document exists in the database.
   */
  static getIndicators = asyncHandler(
    async (_req: Request, res: Response, _next: NextFunction) => {
      const indicators = await IndicatorsModel.findOne({});

      if (!indicators) return new errors.NotFoundError();

      res.json(indicators).status(200);
    }
  );

  /**
   * Updates the indicators document in the database.
   *
   * - Searches for the first indicators document in the database.
   * - If the document is not found, throws a `NotFoundError`.
   * - If found, updates the document with the data provided in the request body.
   * - Returns the updated document in the response with status 200.
   *
   * @param req - The incoming HTTP request containing the update data in the body.
   *              Validated against the `updateIndicatorsSchema`.
   * @param res - The HTTP response object used to send back the updated indicators document.
   * @param _next - The next middleware function (not used in this method).
   * @throws {NotFoundError} If no indicators document exists in the database.
   */
  static updateIndicators = asyncHandler(
    async (
      req: TypedRequest<typeof validationSchemas.updateIndicatorsSchema>,
      res: Response,
      _next: NextFunction
    ) => {
      const indicators = await IndicatorsModel.findOne({});

      if (!indicators) throw new errors.NotFoundError();

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

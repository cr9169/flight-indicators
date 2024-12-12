import axios, { AxiosError } from "axios";
import { Indicators } from "./interfaces/indicators";
import config from "./config";

/**
 * Service class to manage API interactions with server.
 *
 * @class IndicatorsService
 * @property {string} api - The base URL for the server API endpoint.
 */
export default class IndicatorsService {
  static api = config.server.clientConnectionString;

  /**
   * Fetches the indicators document from the server.
   * @returns A promise that resolves to the indicators object or null if an error occurs.
   * @throws {AxiosError} If the error is related to the Axios request (e.g., network issues, server errors).
   *         Includes details such as the error message, HTTP status, and response data (if available).
   * @throws {Error} If the error is unrelated to Axios (e.g., unexpected runtime errors).
   *         Provides a general error message with the original error information.
   */
  static async getIndicators(): Promise<Indicators | null> {
    try {
      const indicators = (await axios.get(this.api)).data;
      return indicators;
    } catch (err) {
      if (axios.isAxiosError(err))
        throw new AxiosError(
          `Failed to fetch indicators!\nError: ${err.message}`
        );
      else throw new Error(`An unexpected error occurred: ${err}`);
    }
  }

  /**
   * Updates the indicators document on the server with new data.
   * @param indicatorsData - The updated indicators data to send to the server.
   * @returns A promise that resolves to the updated indicators object or null if an error occurs.
   * @throws {AxiosError} If the error is related to the Axios request (e.g., network issues, server errors).
   *         Includes details such as the error message, HTTP status, and response data (if available).
   * @throws {Error} If the error is unrelated to Axios (e.g., unexpected runtime errors).
   *         Provides a general error message with the original error information.
   */
  static async updateIndicators(
    indicatorsData: Indicators
  ): Promise<Indicators | null> {
    try {
      const indicators = (await axios.put(this.api, indicatorsData)).data;
      return indicators;
    } catch (err) {
      if (axios.isAxiosError(err))
        throw new AxiosError(
          `Failed to fetch indicators!\nError: ${err.message}`
        );
      else throw new Error(`An unexpected error occurred: ${err}`);
    }
  }
}

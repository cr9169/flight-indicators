import axios from "axios";
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
   */
  static async getIndicators(): Promise<Indicators | null> {
    try {
      const indicators = (await axios.get(this.api)).data;
      return indicators;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Failed to fetch indicators:", err.message);
      } else {
        console.error("An unexpected error occurred:", err);
      }
      return null;
    }
  }

  /**
   * Updates the indicators document on the server with new data.
   * @param indicatorsData - The updated indicators data to send to the server.
   * @returns A promise that resolves to the updated indicators object or null if an error occurs.
   */
  static async updateIndicators(
    indicatorsData: Indicators
  ): Promise<Indicators | null> {
    try {
      const indicators = (await axios.put(this.api, indicatorsData)).data;
      return indicators;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Failed to fetch indicators:", err.message);
      } else {
        console.error("An unexpected error occurred:", err);
      }
      return null;
    }
  }
}

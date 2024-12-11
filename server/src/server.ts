import { once } from "events";
import express from "express";
import http from "http";
import { IndicatorsModel } from "./Indicators/model";
import serverRouter from "./router";
import errorHandler from "./utils/errorHandler";

export class Server {
  private app: express.Application;
  private http!: http.Server;

  constructor(private port: number, private host: string) {
    this.app = Server.createExpressApp();
  }

  /**
   * Creates and configures the Express application.
   *
   * @returns A configured Express application instance.
   */
  static createExpressApp(): express.Application {
    const app = express();

    // Middleware to parse JSON payloads
    app.use(express.json());

    app.use(serverRouter);

    app.use(errorHandler);

    return app;
  }

  /**
   * Starts the HTTP server and initializes the application.
   *
   * - This method starts the Express HTTP server and waits until it is listening for connections.
   * - It checks if an indicators document exists in the database.
   *   - If no document exists, it creates a default document with all values set to 0.
   *   - If a document already exists, it logs that no new document was created.
   *
   * @throws {Error} If the server fails to start or if database operations encounter an error.
   */
  async start() {
    this.http = this.app.listen(this.port, this.host);
    await once(this.http, "listening");

    const existingIndicator = await IndicatorsModel.findOne({});
    if (!existingIndicator) {
      await IndicatorsModel.create({
        altitude: 0,
        his: 0,
        adi: 0,
      });
      console.log(
        "Default indicators document created with all values set to 0."
      );
    } else {
      console.log("Indicators document already exists, didn't create default.");
    }
  }
}

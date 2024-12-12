import { once } from "events";
import express from "express";
import http from "http";
import { IndicatorsModel } from "./Indicators/model";
import serverRouter from "./router";
import errorHandler from "./utils/errorHandler";

/**
 * Server class responsible for initializing and starting the HTTP server.
 *
 * The `Server` class sets up an Express application, configures routes and middleware,
 * and ensures the server is ready to handle incoming connections. Additionally, it
 * interacts with the database during startup to check and initialize the indicators document.
 *
 * @class Server
 * @property {express.Application} app - The Express application instance used by the server.
 * @property {http.Server} http - The HTTP server instance that listens for requests.
 * @constructor
 * @param {number} port - The port on which the server will listen for connections.
 * @param {string} host - The hostname or IP address on which the server will bind.
 */
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

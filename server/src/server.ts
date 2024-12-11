import { once } from "events";
import express from "express";
import http from "http";

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

    return app;
  }

  /**
   * Starts the HTTP server and waits until it is listening for connections.
   *
   * @throws If the server fails to start.
   */
  async start() {
    this.http = this.app.listen(this.port, this.host);
    await once(this.http, "listening");
  }
}

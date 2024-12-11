import mongoose from "mongoose";
import { Server } from "./server";
import config from "./config";

const { mongo, service } = config;

/**
 * Initializes the MongoDB connection.
 *
 * Connects to the MongoDB database using the URI specified in the configuration.
 *
 * @throws Will throw an error if the connection fails.
 */
const initializeMongo = async () => {
  console.log("Connecting to Mongo...");

  await mongoose.connect(mongo.uri);

  console.log("Mongo connection established");
};

/**
 * Main entry point of the application.
 *
 * This function:
 * 1. Initializes the MongoDB connection.
 * 2. Starts the HTTP server on the configured port.
 *
 * Logs any errors that occur during the startup process.
 *
 * @returns A Promise that resolves when the server is successfully started.
 * @throws Will throw an error if any step in the startup process fails.
 */
const main = async (): Promise<void> => {
  await initializeMongo();

  const server = new Server(service.port, service.host);

  await server.start();

  console.log(`Server is running on http://${service.host}:${service.port}`);
};

main().catch((error) => {
  console.error("An error occurred during startup.", {
    error: error.stack || error,
  });
});

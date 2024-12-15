import buildConfig from "./buildConfig";

/**
 * Dynamically constructs the server base URL based on the current window location.
 *
 * This function uses the `window.location.hostname` property at runtime to determine
 * the hostname from which the application was served. It then appends the known server
 * port and the API path to produce a complete URL for fetching indicators.
 *
 * @returns {string} The fully qualified server base URL, including the `/api/indicators` endpoint.
 */
function getServerBaseUrl(): string {
  const hostname = window.location.hostname;
  return `http://${hostname}:${buildConfig.server.port}/api/indicators`;
}

/**
 * Runtime configuration.
 * Uses static values from `buildConfig` plus runtime logic that depends on `window`.
 */
const config = {
  service: {
    ...buildConfig.service,
  },
  server: {
    ...buildConfig.server,
    get clientConnectionString() {
      return getServerBaseUrl();
    },
  },
};

export default config;

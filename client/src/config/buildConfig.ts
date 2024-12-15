/**
 * Static build-time configuration.
 * No access to `window` should be present here.
 */
const buildConfig = {
  service: {
    port: 4000,
    host: "0.0.0.0",
  },
  server: {
    port: 5000,
  },
};

export default buildConfig;

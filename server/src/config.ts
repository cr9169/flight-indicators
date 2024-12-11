const config = {
  service: {
    port: 5000,
    host: "0.0.0.0",
  },
  mongo: {
    uri: "mongodb://localhost",
    usersCollectionName: "users",
  },
};

export default config;

const dotenv = require("dotenv");

const app = require("./app");
const connect_db = require("./db/database");

// Handeling Uncaught Exception
process.on('uncaughtException', err => {
    console.log(`Error: ${err.message}`)
    console.log("Shutting down the server due to Uncaught Exception");
    process.exit(1)
})


//config path and initialisation
dotenv.config({ path: "backend/config/config.env" });

// calling function to connect from our db
connect_db();

const server = app.listen(process.env.PORT, () =>
  console.log(`Server is up and running on port: ${process.env.PORT}`)
);

// Unhandeled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to unhandeled promise rejection");

  server.close(() => {
    process.exit(1);
  });
});

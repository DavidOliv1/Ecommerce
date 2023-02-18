import app from "./app.js";
import dotenv from "dotenv";
import connectDataBase from "./config/dbConnect.js";

process.on("uncaughtException", (error) => {
  console.log(`Error: ${error.message}`);
  console.log("Shutting down the server due to Uncaught Exception");
  process.exit(1);
});

dotenv.config();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on htpp://localhost:${process.env.PORT}`);
});

connectDataBase();

// Unhandled Promise Rejections

process.on("unhandledRejection", (error) => {
  console.log(`Error: ${error.message}`);
  console.log("Shutting down the server due to Unhandled Promise Rejection");

  server.close(() => {
    // process.exit(1);
  });
});

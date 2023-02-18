import express from "express";
import productRoute from "./routes/productRoute.js";
import errorMiddleware from "./middleware/error.js";
import userRoute from "./routes/userRoute.js";

const app = express();

app.use(express.json());

app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);

app.use(errorMiddleware);

export default app;

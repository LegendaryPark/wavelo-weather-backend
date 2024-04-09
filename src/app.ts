import express, { Express } from "express";
import WeatherRouter from "./api/weather/weatherRouter";
import cors from "cors";
import "dotenv/config";

const app: Express = express();
app.use(cors());
app.use(express.json());

app.use("/weather", WeatherRouter);

export default app;

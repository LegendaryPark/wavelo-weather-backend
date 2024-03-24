import { Router, Request, Response } from "express";
import {
  getWeatherHistoryByCity,
  getWeatherByCity,
  getWeather,
} from "./weatherController";

const router: Router = Router();

router.get("/current", async (req: Request, res: Response): Promise<void> => {
  try {
    const { lat, lon, unit } = req.query;
    const result = await getWeather(
      lat as string,
      lon as string,
      unit as string
    );

    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(`Failed : ${err}`);
  }
});

router.get(
  "/location/:city",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { unit } = req.query;
      const result = await getWeatherByCity(
        req.params.city,

        unit as string
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send(`Failed : ${err}`);
    }
  }
);

router.get(
  "/history/:city",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { startDate, endDate, unit } = req.query;
      const result = await getWeatherHistoryByCity(
        req.params.city,
        startDate as string,
        endDate as string,
        unit as string
      );
      res.status(200).send(result);
    } catch (err) {
      res.status(500).send(`Failed : ${err}`);
    }
  }
);

export default router;

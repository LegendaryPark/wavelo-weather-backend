import supertest from "supertest";
import express from "express";
import weatherRouter from "../api/weather/weatherRouter"; // 경로는 실제 파일 위치에 맞게 조정해주세요.

const app = express();
app.use(express.json());
app.use(weatherRouter);

describe("Weather API", () => {
  describe("GET /current", () => {
    it("should return current weather data", async () => {
      const lat = "35.6895";
      const lon = "139.6917";
      const unit = "celsius";

      const response = await supertest(app)
        .get(`/current?lat=${lat}&lon=${lon}&unit=${unit}`)
        .expect(200);

      expect(response.body).toHaveProperty("current_weather");
      expect(response.body).toHaveProperty("current_weather.temperature");
      expect(response.body).toHaveProperty("daily.time");
      expect(response.body).toHaveProperty("daily.temperature_2m_max");
      expect(response.body).toHaveProperty("daily.temperature_2m_min");
    });
  });

  describe("GET /current", () => {
    it("should return an error with a wrong latitude", async () => {
      const lat = "WrongLat";
      const lon = "139.6917";
      const unit = "celsius";

      const response = await supertest(app)
        .get(`/current?lat=${lat}&lon=${lon}&unit=${unit}`)
        .expect(500);

      expect(response.ok).toBe(false);
    });
  });

  describe("GET /current", () => {
    it("should return an error with a wrong longitude", async () => {
      const lat = "51.51";
      const lon = "WrongLon";
      const unit = "celsius";

      const response = await supertest(app)
        .get(`/current?lat=${lat}&lon=${lon}&unit=${unit}`)
        .expect(500);

      expect(response.ok).toBe(false);
    });
  });

  describe("GET /current", () => {
    it("should return an error with a wrong unit", async () => {
      const lat = "35.6895";
      const lon = "139.6917";
      const unit = "wrong unit";

      const response = await supertest(app)
        .get(`/current?lat=${lat}&lon=${lon}&unit=${unit}`)
        .expect(500);

      expect(response.ok).toBe(false);
    });
  });

  describe("GET /current", () => {
    it("should return current weather data with empty unit", async () => {
      const lat = "35.6895";
      const lon = "139.6917";
      const unit = "";

      const response = await supertest(app)
        .get(`/current?lat=${lat}&lon=${lon}&unit=${unit}`)
        .expect(500);

      expect(response.ok).toBe(false);
    });
  });

  describe("GET /location/:city", () => {
    it("should return weather data for a specific city", async () => {
      const city = "seoul";
      const unit = "celsius";

      const response = await supertest(app)
        .get(`/location/${city}?unit=${unit}`)
        .expect(200);

      expect(response.body).toHaveProperty("current_weather");
      expect(response.body).toHaveProperty("current_weather.temperature");
      expect(response.body).toHaveProperty("daily.time");
      expect(response.body).toHaveProperty("daily.temperature_2m_max");
      expect(response.body).toHaveProperty("daily.temperature_2m_min");
    });
  });

  describe("GET /location/:city", () => {
    it("should return an error with a wrong city", async () => {
      const city = "Wrong City";
      const unit = "celsius";

      const response = await supertest(app)
        .get(`/location/${city}?unit=${unit}`)
        .expect(500);

      expect(response.ok).toBe(false);
    });
  });

  describe("GET /location/:city", () => {
    it("should return an error with a wrong unit", async () => {
      const city = "Seoul";
      const unit = "wrong unit";

      const response = await supertest(app)
        .get(`/location/${city}?unit=${unit}`)
        .expect(500);

      expect(response.ok).toBe(false);
    });
  });

  describe("GET /location/:city", () => {
    it("should return an error with empty city", async () => {
      const city = "";
      const unit = "wrong unit";

      const response = await supertest(app)
        .get(`/location/${city}?unit=${unit}`)
        .expect(404);

      expect(response.ok).toBe(false);
    });
  });

  describe("GET /location/:city", () => {
    it("should return an error with empty unit", async () => {
      const city = "Seoul";
      const unit = "";

      const response = await supertest(app)
        .get(`/location/${city}?unit=${unit}`)
        .expect(500);

      expect(response.ok).toBe(false);
    });
  });

  describe("GET /history/:city", () => {
    it("should return historical weather data for a specific city", async () => {
      const city = "seoul";
      const startDate = "2024-01-01";
      const endDate = "2024-01-20";
      const unit = "celsius";

      const response = await supertest(app)
        .get(
          `/history/${city}?startDate=${startDate}&endDate=${endDate}&unit=${unit}`
        )
        .expect(200);

      expect(response.body).toBeInstanceOf(Array);
    });
  });
});

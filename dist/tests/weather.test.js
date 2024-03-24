"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const weatherRouter_1 = __importDefault(require("../api/weather/weatherRouter")); // 경로는 실제 파일 위치에 맞게 조정해주세요.
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(weatherRouter_1.default);
describe("Weather API", () => {
    describe("GET /current", () => {
        it("should return current weather data", () => __awaiter(void 0, void 0, void 0, function* () {
            const lat = "35.6895";
            const lon = "139.6917";
            const unit = "celsius";
            const response = yield (0, supertest_1.default)(app)
                .get(`/current?lat=${lat}&lon=${lon}&unit=${unit}`)
                .expect(200);
            expect(response.body).toHaveProperty("current_weather");
            expect(response.body).toHaveProperty("current_weather.temperature");
            expect(response.body).toHaveProperty("daily.time");
            expect(response.body).toHaveProperty("daily.temperature_2m_max");
            expect(response.body).toHaveProperty("daily.temperature_2m_min");
        }));
    });
    describe("GET /current", () => {
        it("should return an error with a wrong latitude", () => __awaiter(void 0, void 0, void 0, function* () {
            const lat = "WrongLat";
            const lon = "139.6917";
            const unit = "celsius";
            const response = yield (0, supertest_1.default)(app)
                .get(`/current?lat=${lat}&lon=${lon}&unit=${unit}`)
                .expect(500);
            expect(response.ok).toBe(false);
        }));
    });
    describe("GET /current", () => {
        it("should return an error with a wrong longitude", () => __awaiter(void 0, void 0, void 0, function* () {
            const lat = "51.51";
            const lon = "WrongLon";
            const unit = "celsius";
            const response = yield (0, supertest_1.default)(app)
                .get(`/current?lat=${lat}&lon=${lon}&unit=${unit}`)
                .expect(500);
            expect(response.ok).toBe(false);
        }));
    });
    describe("GET /current", () => {
        it("should return an error with a wrong unit", () => __awaiter(void 0, void 0, void 0, function* () {
            const lat = "35.6895";
            const lon = "139.6917";
            const unit = "wrong unit";
            const response = yield (0, supertest_1.default)(app)
                .get(`/current?lat=${lat}&lon=${lon}&unit=${unit}`)
                .expect(500);
            expect(response.ok).toBe(false);
        }));
    });
    describe("GET /current", () => {
        it("should return current weather data with empty unit", () => __awaiter(void 0, void 0, void 0, function* () {
            const lat = "35.6895";
            const lon = "139.6917";
            const unit = "";
            const response = yield (0, supertest_1.default)(app)
                .get(`/current?lat=${lat}&lon=${lon}&unit=${unit}`)
                .expect(500);
            expect(response.ok).toBe(false);
        }));
    });
    describe("GET /location/:city", () => {
        it("should return weather data for a specific city", () => __awaiter(void 0, void 0, void 0, function* () {
            const city = "seoul";
            const unit = "celsius";
            const response = yield (0, supertest_1.default)(app)
                .get(`/location/${city}?unit=${unit}`)
                .expect(200);
            expect(response.body).toHaveProperty("current_weather");
            expect(response.body).toHaveProperty("current_weather.temperature");
            expect(response.body).toHaveProperty("daily.time");
            expect(response.body).toHaveProperty("daily.temperature_2m_max");
            expect(response.body).toHaveProperty("daily.temperature_2m_min");
        }));
    });
    describe("GET /location/:city", () => {
        it("should return an error with a wrong city", () => __awaiter(void 0, void 0, void 0, function* () {
            const city = "Wrong City";
            const unit = "celsius";
            const response = yield (0, supertest_1.default)(app)
                .get(`/location/${city}?unit=${unit}`)
                .expect(500);
            expect(response.ok).toBe(false);
        }));
    });
    describe("GET /location/:city", () => {
        it("should return an error with a wrong unit", () => __awaiter(void 0, void 0, void 0, function* () {
            const city = "Seoul";
            const unit = "wrong unit";
            const response = yield (0, supertest_1.default)(app)
                .get(`/location/${city}?unit=${unit}`)
                .expect(500);
            expect(response.ok).toBe(false);
        }));
    });
    describe("GET /location/:city", () => {
        it("should return an error with empty city", () => __awaiter(void 0, void 0, void 0, function* () {
            const city = "";
            const unit = "wrong unit";
            const response = yield (0, supertest_1.default)(app)
                .get(`/location/${city}?unit=${unit}`)
                .expect(404);
            expect(response.ok).toBe(false);
        }));
    });
    describe("GET /location/:city", () => {
        it("should return an error with empty unit", () => __awaiter(void 0, void 0, void 0, function* () {
            const city = "Seoul";
            const unit = "";
            const response = yield (0, supertest_1.default)(app)
                .get(`/location/${city}?unit=${unit}`)
                .expect(500);
            expect(response.ok).toBe(false);
        }));
    });
    describe("GET /history/:city", () => {
        it("should return historical weather data for a specific city", () => __awaiter(void 0, void 0, void 0, function* () {
            const city = "seoul";
            const startDate = "2024-01-01";
            const endDate = "2024-01-20";
            const unit = "celsius";
            const response = yield (0, supertest_1.default)(app)
                .get(`/history/${city}?startDate=${startDate}&endDate=${endDate}&unit=${unit}`)
                .expect(200);
            expect(response.body).toBeInstanceOf(Array);
        }));
    });
});

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
exports.getWeather = exports.getWeatherByCity = exports.getWeatherHistoryByCity = void 0;
const axios_1 = __importDefault(require("axios"));
const getWeather = (lat, lon, units) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&forecast_days=6&temperature_unit=${units}`);
    console.log("GetWeather ------", response.data);
    return response.data;
});
exports.getWeather = getWeather;
const getWeatherByCity = (city, unit) => __awaiter(void 0, void 0, void 0, function* () {
    const { lat, lon } = yield getLocationCoords(city);
    const weather = yield getWeather(lat, lon, unit);
    console.log("getWeatherByCity--------", weather);
    return weather;
});
exports.getWeatherByCity = getWeatherByCity;
const getWeatherHistoryByCity = (city, startDate, endDate, unit) => __awaiter(void 0, void 0, void 0, function* () {
    const { lat, lon } = yield getLocationCoords(city);
    const response = yield axios_1.default.get(`https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lon}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max&temperature_unit=${unit}`);
    console.log(response.data);
    return response.data;
});
exports.getWeatherHistoryByCity = getWeatherHistoryByCity;
const getLocationCoords = (city) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(`https://geocode.maps.co/search?q=${city}`);
    return response.data[0];
});

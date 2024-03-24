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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const weatherController_1 = require("./weatherController");
const router = (0, express_1.Router)();
router.get("/current", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { lat, lon, unit } = req.query;
        const result = yield (0, weatherController_1.getWeather)(lat, lon, unit);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(`Failed : ${err}`);
    }
}));
router.get("/location/:city", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { unit } = req.query;
        const result = yield (0, weatherController_1.getWeatherByCity)(req.params.city, unit);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(`Failed : ${err}`);
    }
}));
router.get("/history/:city", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { startDate, endDate, unit } = req.query;
        const result = yield (0, weatherController_1.getWeatherHistoryByCity)(req.params.city, startDate, endDate, unit);
        res.status(200).send(result);
    }
    catch (err) {
        res.status(500).send(`Failed : ${err}`);
    }
}));
exports.default = router;

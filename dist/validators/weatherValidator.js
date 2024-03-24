"use strict";
const validateWeather = (data) => {
    var _a, _b, _c, _d;
    let errors = {};
    if (data.city) {
        if (!data.city.match(/[a-z]/i)) {
            (_a = errors.city) === null || _a === void 0 ? void 0 : _a.push("VALIDATION_CITY_SHOULD_BE_IN_LETTERS_ONLY");
        }
        if (data.city.length > 200) {
            (_b = errors.city) === null || _b === void 0 ? void 0 : _b.push("VALIDATION_CITY_NAME_SHOULD_BE_MORE_THAN_200_IN_LETTERS");
        }
    }
    if (data.lat) {
        if (!Number.isFinite(Number(data.lat))) {
            (_c = errors.lat) === null || _c === void 0 ? void 0 : _c.push("VALIDATION_LATITUDE_MUST_BE_NUMBER");
        }
    }
    if (data.lon) {
        if (!Number.isFinite(Number(data.lon))) {
            (_d = errors.lon) === null || _d === void 0 ? void 0 : _d.push("VALIDATION_LONGITUDE_MUST_BE_NUMBER");
        }
    }
    return {
        errors,
        isValid: Object.keys(errors).length === 0,
    };
};
module.exports = validateWeather;

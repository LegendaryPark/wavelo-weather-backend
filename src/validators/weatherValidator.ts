interface WeatherData {
  city: string;
  lat: Number;
  lon: Number;
}

const validateWeather = (data: WeatherData) => {
  let errors: ErrorMessages<WeatherData> = {};

  if (data.city) {
    if (!data.city.match(/[a-z]/i)) {
      errors.city?.push("VALIDATION_CITY_SHOULD_BE_IN_LETTERS_ONLY");
    }
    if (data.city.length > 200) {
      errors.city?.push(
        "VALIDATION_CITY_NAME_SHOULD_BE_MORE_THAN_200_IN_LETTERS"
      );
    }
  }
  if (data.lat) {
    if (!Number.isFinite(Number(data.lat))) {
      errors.lat?.push("VALIDATION_LATITUDE_MUST_BE_NUMBER");
    }
  }

  if (data.lon) {
    if (!Number.isFinite(Number(data.lon))) {
      errors.lon?.push("VALIDATION_LONGITUDE_MUST_BE_NUMBER");
    }
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};

module.exports = validateWeather;

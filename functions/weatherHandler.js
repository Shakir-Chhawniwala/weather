const axios = require("axios");

const WEATHER_API = process.env.WEATHERAPI;

exports.handler = async function (event, context, callback) {
  try {
    const { cityTerm } = event.queryStringParameters;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityTerm}&units=metric&appid=${WEATHER_API}`
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};

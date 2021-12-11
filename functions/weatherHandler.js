require("dotenv").config();
const axios = require("axios");

const WEATHER_API = process.env.REACT_APP_API_KEY;

exports.handler = async function (event, context) {

  try {
    const { cityTerm } = event.queryStringParameters;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityTerm}&units=metric&appid=${WEATHER_API}`
    );
    return {
      statusCode: 200,
      body:JSON.stringify(response.data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: console.log(JSON.stringify({ error: "Failed fetching data" })),
    };
  }
};

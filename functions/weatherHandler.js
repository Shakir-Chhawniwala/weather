require("dotenv").config();
const axios = require("axios");

const WEATHERAPI = process.env.WEATHERAPI;

exports.handler = async function (event, context, callback) {
  try {
    const { cityTerm } = event.queryStringParameters;
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityTerm}&units=metric&appid=${WEATHERAPI}`
    );
    // const data = await response.json();
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

const axios = require("axios");

let TOKEN = "";

function setToken(token) {
  TOKEN = token;
}

async function Log(stack, level, packageName, message) {
  try {
    await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    );
  } catch (err) {
    console.error("Logging Failed:", err.message);
  }
}

module.exports = {
  Log,
  setToken,
};
// IMPORTS
const axios = require("axios");
const cheerio = require("cheerio");
const playwright = require("playwright");
const result = {};
// GET USER INPUT


// FETCH DATA
async function scrapeData() {
  axios.get(url)
  .then(response => {
    console.log('Data retrieved successfully:', response.data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  })
  .then(() => {
    console.log('GET request completed');
  });
}

// PARSE DATA

// DISPLAY DATA





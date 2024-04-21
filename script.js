// IMPORTS
const axios = require("axios");
const cheerio = require("cheerio");
const playwright = require("playwright");
const result = {};

import inquirer from "inquirer";
// GET USER INPUT

const url = inquirer.prompt("Enter the URL of the website you want to scrape:").then(response => console.log(response));

  inquirer.prompt("Enter the URL of the website you want to scrape:")
    .then(response => {
      return response;
    });

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


///////// WORK SPACE //////////

const extractData = $ => { // This function is unique to each webpage. In this case, it extracts all elements with the class value of product
  $('.product').map((_, product)=>{
    const $product  = $(product)

    return (
      {
        id: $product.find('a[data-product_id]'), // finds <a> with attribute data-product_id
        title: $product.find('h2').text(),
        price: $product.find('.price').text(),
      }
    )
  })
  .toArray(); // Converts cheerio array to jQuery array;
}
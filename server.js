/*
Task:- Write a function that makes a paginated GET 
request to an API and returns all the results fetched 
from database (mongodb)


Api :- https://jsonplaceholder.typicode.com/todos
*/

const express = require("express");
const axios = require("axios");
const mongoose = require("mongoose");
const server = express();
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

const MONGO_URI = `mongodb+srv://emailjyotisingh13:BYlqE2fM976e745E@cluster0.3d1lybe.mongodb.net/todo_app`;
// DB connection
mongoose.connect(MONGO_URI).then(() => {
  console.log("MongoDB connected.");
});

server.get("/", (req, res) => {
  console.log("I am get request");
  res.send("I am home page");
});

server.post("/", async (req, res) => {
  //   console.log(req.body);
  //   const { userId, id, title, completed } = req.body;
  const userDb = await user.save();
});

async function fetchAllResults(url) {
  let allResults = [];

  try {
    // Make initial request
    let response = await axios.get(url);
    let data = response.data;
    allResults.push(...data);

    // Check if there are more pages
    while (response.headers.nextpage) {
      // Get the URL for the next page
      const nextPageUrl = response.headers.nextpage;

      // Make request to the next page
      response = await axios.get(nextPageUrl);
      data = response.data;
      allResults.push(...data);
    }
  } catch (error) {
    console.error("Error fetching results:", error);
  }

  return allResults;
}

server.get("/pagination_dashboard", async (req, res) => {
  const skip = req.query.skip || 0; //client
  const LIMIT = 5; //backend

  const url = "https://jsonplaceholder.typicode.com/todos";
  fetchAllResults(url)
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

server.post("/add_data", async (req, res) => {
  const skip = req.query.skip || 0; //client
  const LIMIT = 5; //backend

  const url = "https://jsonplaceholder.typicode.com/todos";
  fetchAllResults(url)
    .then((results) => {
      console.log(results);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

server.listen(8000, () => {
  console.log("Server is running at port 8000");
});

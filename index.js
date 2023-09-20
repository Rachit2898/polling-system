const express = require("express");
const connectWithDb = require("./config/db");
const serverless = require("serverless-http");
const router = express.Router();

require("dotenv").config();
const app = express();
const { PORT } = process.env;

// connect with database
connectWithDb();

// regular middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("./.netlify/functions/api", router);
module.exports = app;
module.exports.handler = serverless(app);

// use express router
// app.use("/", require("./routes"));

// app.listen(PORT || 2000, (err) => {
//   if (err) {
//     console.log(`Error in running the server : ${err}`);
//   }
//   console.log(`Server is up and running at ${PORT}`);
// });

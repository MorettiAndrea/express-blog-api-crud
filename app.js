// setup
const express = require("express");
const app = express();
const port = 3000;
const localHost = `http://localhost:${port}`;

// import
const router = require("./routers/postsRoutes");
const { errorHandler } = require("./middlewares/internalServerError.js");
const { notFoundHandler } = require("./middlewares/notFound.js");

// middleware
app.use(express.json());
app.use(express.static("img"));
app.use("/posts", router);

// MIDDLEWARE PER GESTIONE ERRORI
app.use(errorHandler);
app.use(notFoundHandler);

// console check
app.listen(port, () => {
  console.log(`server in ascolto su ${localHost}`);
});

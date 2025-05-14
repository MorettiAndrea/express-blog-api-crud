// setup
const express = require("express");
const app = express();
const port = 3000;
const localHost = `http://localhost:${port}`;

// import
const router = require("./routers/postsRoutes");

// middleware
app.use(express.static("img"));
app.use("/posts", router);

// console check
app.listen(port, () => {
  console.log(`server in ascolto su ${localHost}`);
});

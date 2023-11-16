let express = require("express");
let cors = require("cors");
let bodyParse = require("body-parser");
let load = require("./loader/index");
let http = require('http');
let route = require("./router/index").route;

require("dotenv").config();

const startServer = async () => {
  try {
    let app = express();
    app.use(bodyParse());
    let server = http.Server(app);

    await load.loader();

    app.use(
      cors({
        origin: "*",
        credentials: true,
      })
    );
    route(app);
    server.listen(process.env.PORT || 3003, () => {
      console.log("Connect to port", process.env.PORT);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();

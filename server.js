const express = require("express");
const bodyParser = require("body-parser");
const faker = require("faker");
const times = require("lodash.times");
const random = require("lodash.times");
const db = require("./models");
const apiGame = require("./app/api/game");
const apiUser = require("./app/api/user");

const app = express();
app.use(bodyParser.json());
app.use(express.static("app/public"));

apiGame(app, db);
apiUser(app, db);

db.sequelize.sync().then(() => {
  // populate author table with dummy data

  app.listen(8080, () => console.log("App listening on port 8080!"));
});

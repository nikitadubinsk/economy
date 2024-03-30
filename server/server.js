const express = require("express");
const PORT = 3500;
const app = express();
const history = require("connect-history-api-fallback");
const serveStatic = require("serve-static");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const Sequelize = require("sequelize");
const multer = require("multer");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const { secret } = require("./config/config");
const path = require("path");
const fileUpload = require("express-fileupload");

// const authRouter = require("./routers/authRouter");
// const adminRouter = require("./routers/adminRouter");
// const userRouter = require("./routers/userRouter");
// const operatorRouter = require("./routers/operatorRouter");

const CONFIG = {
  DB: "a0936510_finliteracy",
  USERNAME: "a0936510_finliteracy",
  PASSWORD: "admin123",
  DIALECT: "mysql",
  HOST: "pma.sprinthost.ru/",
};

app.use(cookieParser("economy"));
const db = require("./models/index");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser("economy"));

const sequelize = new Sequelize(CONFIG.DB, CONFIG.USERNAME, CONFIG.PASSWORD, {
  dialect: CONFIG.DIALECT,
  host: CONFIG.HOST,
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PATCH, PUT, POST, DELETE, OPTIONS"
  );
  next();
});

app.use(history());
app.use(cookieParser());



app.use("/", serveStatic(path.join(__dirname, "../dist/economy")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/economy/index.html"));
});
app.get("/*/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/economy/index.html"));
});

db.sequelize
  //.sync({ force: true })
  .sync()
  .then(async () => {
    app.listen(PORT, () => {
      console.log(`Сервер запущен по адресу http://localhost:${PORT}`);
    });
    console.log("Вы успешно подключились к базе данных");
  })
  .catch((err) => console.log(err));

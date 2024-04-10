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

const authRouter = require("./routers/authRouter");
const adminRouter = require("./routers/adminRouter");
const userRouter = require("./routers/userRouter");
const operatorRouter = require("./routers/operatorRouter");

const CONFIG = {
  DB: "a0942858_economy",
  USERNAME: "a0942858_economy",
  PASSWORD: "Qq123456",
  DIALECT: "mysql",
  HOST: "localhost",
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

app.use('/api/auth', authRouter);
app.use('/api/manager', operatorRouter);
app.use('/api/users', userRouter);
app.use('/api/admin', adminRouter);

app.use(multer({dest: 'server/uploads'}).single('file'));

app.post('/api/photo', async (req, res) => {
  try {
      const extname = path.extname(req.file.originalname);
      if (req.file) {
          fs.rename(req.file.path, `${req.file.destination}/${req.file.filename}${extname}`, async () => {
              res.send({name: `${req.file.filename}${extname}`});
          });
      }
  } catch (e) {
      console.error(e);
      res.status(500).send({
          message: `Произошла небольшая ошибка во время загрузки фотографии ${e.message}`,
      });
  }
});


app.get('/api/file/:filename', (req, res) => {
  res.sendFile(path.join(__dirname, '/uploads', req.params.filename));
});
app.use("/", serveStatic(path.join(__dirname, "../dist/economy")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/economy/index.html"));
});
app.get("/*/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/economy/index.html"));
});

// try {
//     db.Roles.create({
//     name: "Родитель",
//   });
//     db.Roles.create({
//     name: "Ребенок",
//   });
//     db.Roles.create({
//     name: "Оператор",
//   });
//     db.Roles.create({
//     name: "Администратор",
//   });
//    db.StoryCategories.create({
//       name: "6-12",
//     });
//      db.StoryCategories.create({
//       name: "12-18",
//     });
//      db.SpendingCategories.create({
//       name: "Супермаркеты",
//     });
//      db.SpendingCategories.create({
//       name: "Одежда и обувь",
//     });
//      db.StoryCategories.create({
//       name: "Родитель",
//     });
// } catch {
//   console.log("ОШИБКА")
// }

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

require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path')

app.use('/images',express.static('images'))
app.use(express.json());
app.use(cors());


app.use(require('./routes/users.route'));
app.use(require('./routes/comments.route'))

mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(process.env.PORT, () => {
  console.log("Сервер запущен успешно");
});

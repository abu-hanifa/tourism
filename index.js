require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(cors());

<<<<<<< HEAD
app.use(require('./routes/users.route'));

=======
>>>>>>> 195e4e46bc5fd212b1d04c3609a93c2ea8ec452b
mongoose
  .connect(process.env.MONGO_SERVER)
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(process.env.PORT, () => {
  console.log("Сервер запущен успешно");
});

const express = require("express");
const mongoose = require("mongoose");

const notRoute = require("./routers/router.js");

require("dotenv").config();

const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Veritabanına Bağlandı");
    app.listen(process.env.PORT, () => {
      console.log(`${process.env.PORT}. PORT Dinleniyor`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/notlar", notRoute);

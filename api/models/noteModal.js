const mongoose = require("mongoose");

const sema = mongoose.Schema;

const notSema = sema(
  {
    baslık: {
      type: String,
      requried: true,
    },

    aciklama: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Not", notSema);

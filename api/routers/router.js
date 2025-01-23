const express = require("express");

const NotModel = require("../models/noteModal.js");
const {
  notOlustur,
  notlarGetir,
  notGetir,
  notSil,
  notGuncelle,
} = require("../controllers/notController.js");

const router = express.Router();

router.get("/", notlarGetir);

router.get("/:id", notGetir);

router.post("/", notOlustur);

router.delete("/:id", notSil);

router.patch("/:id", notGuncelle);

module.exports = router;

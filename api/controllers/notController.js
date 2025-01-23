const NotModel = require("../models/noteModal.js");
const mongoose = require("mongoose");

const notOlustur = async (req, res) => {
  const { baslık, aciklama } = req.body;

  try {
    const not = await NotModel.create({ baslık, aciklama });
    res.status(200).json(not);
  } catch (error) {
    res.status(400).json({ hata: error.message });
  }
};

const notlarGetir = async (req, res) => {
  const notlar = await NotModel.find().sort({ createdAt: -1 });
  res.status(200).json(notlar);
};

const notGetir = async (req, res) => {
  const { id } = await req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "ID Geçersiz" });
  }
  const not = await NotModel.findById(id);

  if (!not) {
    return res.status(404).json({ message: "Not Bulunamadı" });
  } else {
    res.status(200).json(not);
  }

  res.status(200).json(notlarGetir);
};

const notSil = async (req, res) => {
  const { id } = await req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "ID Geçersiz" });
  }

  const not = await NotModel.findOneAndDelete({ _id: id });

  if (!not) {
    return res.status(404).json({ message: "Not Bulunamadı" });
  } else {
    res.status(200).json(not);
  }

  res.status(200).json(notlarGetir);
};

const notGuncelle = async (req, res) => {
  const { id } = await req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ message: "ID Geçersiz" });
  }

  const not = await NotModel.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    { new: true }
  );

  if (!not) {
    return res.status(404).json({ message: "Not Bulunamadı" });
  } else {
    res.status(200).json(not);
  }

  res.status(200).json(notlarGetir);
};

module.exports = {
  notOlustur,
  notlarGetir,
  notGetir,
  notSil,
  notGuncelle,
};

const Flat = require("../Models/flatModel");


const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const createFlat = await Flat.create(req.body);
    return res.status(201).send(createFlat);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const GetallFlats = await Flat.find()
      .populate({ path: "tenant" })
      .lean()
      .exec();

    res.status(201).send(GetallFlats);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/findflat/:id", async (req, res) => {
  try {
    const GetFlat = await Flat.findById(req.params.id);

    return res.status(200).send(GetFlat);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const DeletedFlat = await Flat.findByIdAndDelete(req.params.id);

    return res.status(200).send(DeletedFlat);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;

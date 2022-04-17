const Tenant = require("../Models/tenantModel");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const createTenant = await Tenant.create(req.body);
    return res.status(201).send(createTenant);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const GetallTenants = await Tenant.find().lean().exec();
    res.status(201).send( GetallTenants);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/findtenant/:id", async (req, res) => {
  try {
    const GetTenant = await Tenant.findById(req.params.id);

    return res.status(200).send(GetTenant);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const DeletedTenant = await Tenant.findByIdAndDelete(req.params.id);

    return res.status(200).send(DeletedTenant);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;

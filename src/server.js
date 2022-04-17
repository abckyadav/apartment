const express = require("express");
const connectDB = require("./config/db");
const flatController = require("./Controllers/flatController");
const tentantController = require("./Controllers/tenantController");
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use("/flat", flatController);
app.use("/tenant", tentantController);
//
app.listen(port, () => {
  connectDB();
  console.log(`listening on port ${port}`);
});

const mongoose = require("mongoose");

const FlatSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    block: { type: String, required: true },
    flatNo: { type: Number, required: true },
    tenant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tenant",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Flat", FlatSchema);

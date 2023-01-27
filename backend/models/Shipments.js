const mongoose = require("mongoose");

const ShipmentsSchema = new mongoose.Schema({
  Source: String,
  Destination: String,
  Price:Number,
  SenderID:String,
  reciverID:String,
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("Shipments", ShipmentsSchema);

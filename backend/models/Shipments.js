const mongoose = require("mongoose");

const ShipmentsSchema = new mongoose.Schema({
  Source: String,
  Destination: String,
  TentativePrice:Number,
  FinalPrice:Number,
  SenderID:String,
  reciverID:String,
  approval:Number,
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("Shipments", ShipmentsSchema);

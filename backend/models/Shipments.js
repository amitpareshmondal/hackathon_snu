const mongoose = require("mongoose");

const ShipmentsSchema = new mongoose.Schema({
  Source: String,
  Destination: String,
  TentativePrice:Number,
  FinalPrice:Number,
  SenderID:String,
  receiverID:String,
  approval:Boolean,
  product: {
    name: String,
    quantity: Number
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("Shipments", ShipmentsSchema);

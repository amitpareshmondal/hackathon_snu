const mongoose = require("mongoose");

const WarehouseSchema = new mongoose.Schema({
  CurrentVolume:Number,
  Country: String,
  MaxVolume: Number,
  Products:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
  },
  BusinessID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "business"
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  }
 
});

module.exports = mongoose.model("Warehouses", WarehouseSchema);

const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  email: String,
  products:[{
    name: String,
    quantity: Number
  }],
  location:String,
  createdAt: {
        type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("business", BusinessSchema);

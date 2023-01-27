const express = require("express");
const router = express.Router();

const questionDB = require("../models/Warehouses");
router.get("/",async(req,res)=>{
    res.send("Hello")
})
module.exports = router;
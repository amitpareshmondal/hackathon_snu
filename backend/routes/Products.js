const express = require("express");
const products = require("../controllers/ProductsController.js");
const router = express.Router()

//TO GET WAREHOUSE
router.get("/", products.getAllProducts)
//TO CREATE WAREHOUSE
router.post("/", products.addProducts)
//TO EDIT WAREHOUSE
router.post("/edit", products.editProducts)
// TO EDIT WAREHOUSE
router.delete("/delete", products.deleteProducts)


module.exports = router 

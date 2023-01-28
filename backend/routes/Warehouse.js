const express = require("express");
const warehouse = require("../controllers/warehouseController.js");
const router = express.Router()

//TO GET WAREHOUSE
router.get("/", warehouse.getWarehouse)
//TO CREATE WAREHOUSE
router.post("/", warehouse.createWarehouse)
//TO EDIT WAREHOUSE
router.post("/edit", warehouse.editWarehouse)
// TO EDIT WAREHOUSE
router.delete("/", warehouse.deleteWarehouse )


module.exports = router 

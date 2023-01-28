const express = require("express");
const shipment = require("../controllers/ShipmentController.js");
const router = express.Router()

//TO GET ALL Shipment
router.post("/getAll", shipment.getAllShipment)
//TO GET ALL Shipment from particular business
router.post("/getAllBusiness", shipment.getAllShipmentBusiness)
//TO CREATE Shipment
router.post("/createShipment", shipment.createShipment)
//TO EDIT Shipment BY ADMIN
router.post("/editShipmentAdmin", shipment.editShipmentAdmin)
//TO EDIT Shipment BY Business
router.post("/editShipmentbusiness", shipment.editShipmentbusiness)
// TO delete Shipment
router.post("/deleteShipment", shipment.deleteShipmentbusiness)


module.exports = router 

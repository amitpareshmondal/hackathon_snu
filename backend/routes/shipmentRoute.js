import express from "express";
import { getAllShipment,  getAllShipmentBusiness,createShipment, editShipmentAdmin, editShipmentbusiness,deleteShipmentbusiness } from "../controllers/ShipmentController.js";
const router = express.Router()

//TO GET ALL Shipment
router.post("/getAll", getAllShipment)
//TO GET ALL Shipment from particular business
router.post("/getAllBusiness", getAllShipmentBusiness)
//TO CREATE Shipment
router.post("/createShipment", createShipment)
//TO EDIT Shipment BY ADMIN
router.post("/editShipmentAdmin",editShipmentAdmin)
//TO EDIT Shipment BY Business
router.post("/editShipmentbusiness",editShipmentbusiness)
// TO delete Shipment
router.post("/deleteShipment",deleteShipmentbusiness)


export default router 

import express from "express";
import { getWarehouse,  createWarehouse, editWarehouse, deleteWarehouse } from "../controllers/wareshouseController.js";
const router = express.Router()

//TO GET WAREHOUSE
router.post("/getWarehouse", getWarehouse)
//TO CREATE WAREHOUSE
router.post("/createWarehouse", createWarehouse)
//TO EDIT WAREHOUSE
router.post("/editWarehouse",editWarehouse)
// TO EDIT WAREHOUSE
router.post("/deleteWarehouse",deleteWarehouse )


export default router 

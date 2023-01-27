import express from "express";
import { getAllProducts,  addProducts, editProducts, deleteProducts } from "../controllers/ProductsWarehouseController.js";
const router = express.Router()

//TO GET WAREHOUSE
router.post("/getAllProducts",getAllProducts)
//TO CREATE WAREHOUSE
router.post("/createWarehouse", addProducts)
//TO EDIT WAREHOUSE
router.post("/editWarehouse",editProducts)
// TO EDIT WAREHOUSE
router.post("/deleteWarehouse", deleteProducts)


export default router 

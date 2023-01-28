const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = 5000;
const db = require("./db");
const router = require("./routes");
const warehouseRoutes =  require("./routes/Warehouse.js")
const ProductsWarehouseRoutes =  require("./routes/Products.js")
const shipmentsRoutes =  require("./routes/Shipments.js")


//database connection

db.connect();

//middle ware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.set("json spaces", 2);
//cors
app.use((req, res, next) => {
  req.header("Access-Control-Allow-Origin", "*");
  req.header("Access-Control-Allow-Headers", "*");
  next();
});

//routes

app.use("/api", router);
app.use("/warehouses", warehouseRoutes);
app.use("/products", ProductsWarehouseRoutes);
app.use("/shipments", shipmentsRoutes);

app.use("/uploads", express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
  try {
    res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
  } catch (e) {
    res.send("Oops! unexpected error");
  }
});

app.use(cors());

//server listening
app.listen(process.env.PORT || PORT, () => {
  console.log(`Listening on port no ${PORT}`);
});

const express = require("express");
const router = express.Router();

const questionRouter = require("./Question");
const answerRouter = require("./Answer");
const businessRouter = require("./Business");

// const warehouse=require("./Warehouse");
router.get("/", (req, res) => {
  res.send("This api is reserved ");
});

router.use("/questions", questionRouter);
router.use("/answers", answerRouter);
router.use("/business", businessRouter)

// router.use("/warehouse", warehouse);
module.exports = router;

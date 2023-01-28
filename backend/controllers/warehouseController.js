const warehouse = require("../models/Warehouses");
const business = require("../models/Business");

const getWarehouse = async (req, res, next) => {
  try {
    business.aggregate([
      {
        $lookup: {
          from: "warehouses", //collection to join
          localField: "_id", //field from input document
          foreignField: "BusinessID",
          as: "allWarehouses", //output array field
        },
      },
    ])
      .exec()
      .then(doc => res.status(200).json(doc[0].allWarehouses))
      .catch(err => console.error(err))
  } catch (err) {
    console.log("we in getWarehouse controller error", err)
  }
}

const createWarehouse = async (req, res, next) => {
  try {
    const wh = await warehouse.create({
      CurrentVolume: 0,
      Country: req.body.Country,
      MaxVolume: req.body.MaxVolume,
      BusinessID: req.body.BusinessID,
      Products: [],
    })
    .then(doc => {
        console.log(doc)
        res.status(200).json(doc)
    })
    .catch(err => {
        console.error(err)
    })
  } catch (err) {
    console.log("we in createWarehouse controller error", err)
  }
}

const editWarehouse = async (req, res, next) => {
  try {
    warehouse
      .findOneAndUpdate({_id: req.body.id}, {
          Country: req.body.Country,
          MaxVolume: req.body.MaxVolume,
        }, {
          new: true,                       // return updated doc
          runValidators: true              // validate before update
        })
      .then(doc => res.status(200).json(doc))
      .catch(err => console.error(err))
  } catch (err) {
    console.log("we in controller error", err)
  }
}

const deleteWarehouse = async (req, res, next) => {
  try {
    warehouse
      .findOneAndRemove({
        _id: req.body.id
      })
      .then(response => res.status(200).send(response))
      .catch(err => console.error(err))
  } catch (err) {
    console.log("we in controller error", err)
  }
}

module.exports = { getWarehouse, createWarehouse, editWarehouse, deleteWarehouse }
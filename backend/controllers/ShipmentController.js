const Shipments = require('../models/Shipments')

const getAllShipment = async (req, res, next) => {
  try {
    await Shipments
      .find()
      .then(doc => res.status(200).json(doc))
      .catch(err => console.error(err))
  } catch (err) {
    console.log("we in getAllShipment controller error", err)
  }
}

const getAllShipmentBusiness = async (req, res, next) => {
  try {
    Shipments
      .find({SenderID: req.params.email})
      .then(doc => res.status(200).send(doc))
      .catch(err => console.error(err))
  } catch (err) {
    console.log("we in getAllShipmentBusiness controller error", err)
  }
}

const createShipment = async (req, res, next) => {
  try {
    await Shipments.create({
      Source: req.body.Source,
      Destination: req.body.Destination,
      TentativePrice: req.body.TentativePrice,
      FinalPrice: 0,
      SenderID: req.body.SenderID,
      receiverID: req.body.receiverID,
      approval: false,
      product: {
        name: req.body.productName,
        quantity: req.body.productQuantity
      }
    })
      .then(doc => res.status(200).json(doc))
      .catch(err => console.error(err))
  } catch (err) {
    console.log("we in createShipment controller error", err)
  }
}

const editShipmentAdmin = async (req, res, next) => {
  try {
    Shipments
      .findOneAndUpdate({ _id: req.params.shipmentID}, {
          FinalPrice: req.body.price,
          approval: req.body.approval,   // field:values to update
        }, {
          new: true,                       // return updated doc
          runValidators: true              // validate before update
        })
      .then(doc => res.status(200).json(doc))
      .catch(err => console.error(err))
  } catch (err) {
    console.log("we in Shipment controller error", err)
  }
}

const editShipmentbusiness = async (req, res, next) => {
  try {
    Shipments
      .findOneAndUpdate({_id: req.params.shipmentID}, {
          Source: req.body.Source,
          Destination: req.body.Destination
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

const deleteShipmentbusiness = async (req, res, next) => {
  try {
    Shipments
      .findOneAndRemove({_id: req.params.shipmentID})
      .then(response => res.status(200).json(response))
      .catch(err => console.error(err))
  } catch (err) {
    console.log("we in controller error", err)
  }
}

module.exports = { getAllShipment, getAllShipmentBusiness, createShipment, editShipmentAdmin, editShipmentbusiness, deleteShipmentbusiness }
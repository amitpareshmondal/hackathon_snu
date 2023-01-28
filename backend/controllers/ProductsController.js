const warehouse = require("../models/Warehouses");

const getAllProducts = async (req, res, next) => {
	try {
		warehouse.aggregate([
			{
				$lookup: {
					from: "business", //collection to join
					localField: "_id", //field from input document
					foreignField: "warehouses",
					as: "allWarehouses", //output array field
				},
			},
		])
		.exec()
		.then(docs => res.status(200).json(docs))
		.catch(err => console.log(err))
	} catch (err) {
			console.log("we in controller error", err)
	}
}

const addProducts = async (req, res, next) => {
	try {
		res.status(200).send("Warehouse has been created!")
	} catch (err) {
		console.log("we in controller error", err)

	}


}

const editProducts = async (req, res, next) => {
	try {
		res.status(200).send("user has been created!")
	} catch (err) {
		console.log("we in controller error", err)

	}


}

const deleteProducts = async (req, res, next) => {
	try {
		res.status(200).send("user has been created!")
	} catch (err) {
		console.log("we in controller error", err)

	}


}

module.exports = { getAllProducts, addProducts, editProducts, deleteProducts }
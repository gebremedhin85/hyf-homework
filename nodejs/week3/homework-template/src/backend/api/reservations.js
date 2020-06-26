const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

//to get all meals from table meals
router.get("/", async (req, res) => {
	try {
		const reseravtions = await knex("reservations").select("*");
		res.json(reseravtions);
	} catch (error) {
		throw error;
	}
});

router.post("/", async (req, res) => {
	const newResevation = {
		id: req.query.id,
		number_of_guests: req.query.number_of_guests,
		meal_id: req.query.meal_id,
		created_date: req.query.created_date,
	};
	try {
		await knex("reservations").insert(newResevation);
		res.send(`new resevation inserted with Id ${newResevation.id}`);
	} catch (error) {
		throw error;
	}
});

//to get a reservation
router.get("/:id", async (req, res) => {
	const reservationId = parseInt(req.params.id);
	try {
		const reservation = await knex("reservations")
			.select()
			.where({ id: reservationId });

		res.json(reservation);
	} catch (error) {
		throw error;
	}
});
//changing a reservation
router.put("/:id", async (req, res) => {
	const reservationId = parseInt(req.params.id);
	try {
		await knex("reservations")
			.where({ id: reservationId })
			.update({ meal_id: req.query.meal_id });
		res.send(`reservation with id ${reservationId} is updated`);
	} catch (error) {
		throw error;
	}
});

//Deleting a reservation
router.delete("/:id", async (req, res) => {
	let reservationId = parseInt(req.params.id);
	try {
		await knex("reservations").where({ id: reservationId }).delete();
		res.send(`reservation with id ${reservationId} is deleted`);
	} catch (error) {
		throw error;
	}
});

module.exports = router;

const express = require("express");
require("express-async-errors");
const router = express.Router();
const knex = require("../database");

//to get all reservations from table meals
router.get("/", async (req, res) => {
	const reseravtions = await knex("reservations").select("*");
	res.json(reseravtions);
});

router.post("/", async (req, res) => {
	const newResevation = {
		id: req.query.id,
		number_of_guests: req.query.number_of_guests,
		meal_id: req.query.meal_id,
		created_date: req.query.created_date,
		name: req.query.name,
		email: req.query.email,
		phone_number: req.query.phone_number,
	};
	await knex("reservations").insert(newResevation);
	res.send(`new resevation inserted with Id ${newResevation.id}.`);
});

//to get a reservation
router.get("/:id", async (req, res) => {
	const reservationId = parseInt(req.params.id);
	if (!reservationId)
		res.status(400).send(`Bad request, id should be a number.`);
	else {
		const reservation = await knex("reservations").where({ id: reservationId });
		if (reservation.length === 0)
			res
				.status(404)
				.send(`Not found, there is no reservation with id: ${reservationId}.`);
		else res.json(reservation);
	}
});
//changing a reservation
router.put("/:id", async (req, res) => {
	const reservationId = parseInt(req.params.id);
	const reservationToUpdate = await knex("reservations").where({
		id: reservationId,
	});
	if (reservationToUpdate.length > 0) {
		await knex("reservations").where({ id: reservationId }).update({
			meal_id: req.query.meal_id,
			number_of_guests: req.query.number_of_guests,
		});
		res.send(`reservation with id ${reservationId} is updated.`);
	} else
		res
			.status(404)
			.send(`Not found, reservation with id ${reservationId} not exist.`);
});

//Deleting a reservation
router.delete("/:id", async (req, res) => {
	let reservationId = parseInt(req.params.id);
	const reservationToDelete = await knex("reservations").where({
		id: reservationId,
	});
	if (reservationToDelete.length > 0) {
		await knex("reservations").where({ id: reservationId }).delete();
		res.send(`reservation with id ${reservationId} is deleted.`);
	} else
		res.status(404).send(`reservation with id ${reservationId} not exist.`);
});
router.use((err, req, res, next) => {
	res.status(400).send(err.message);
});

module.exports = router;

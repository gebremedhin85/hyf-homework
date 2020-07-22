const express = require("express");
require("express-async-errors");
const router = express.Router();
const knex = require("../database");
const { sum, limit } = require("../database");

//to inser a new meal
router.post("/", async (req, res) => {
	const newMeal = {
		title: req.query.title,
		description: req.query.description,
		location: req.query.location,
		for_when: req.query.for_when,
		max_reservations: req.query.max_reservations,
		price: req.query.price,
		created_date: req.query.created_date,
	};
	await knex("meals").insert(newMeal);
	res.send(`new meal inserted: ${newMeal.title}`);
});

//to get a meal by id
router.get("/:id", async (req, res) => {
	const mealId = parseInt(req.params.id);
	if (!mealId) res.status(400).send(`Bad request, id should be a number.`);
	else {
		const meal = await knex("meals").where({ id: mealId });
		if (meal.length === 0)
			res.status(404).send(`Not found, there is no meal with id: ${mealId}.`);
		else res.json(meal);
	}
});

//to put/update a meal with specific id
router.put("/:id", async (req, res) => {
	let mealId = parseInt(req.params.id);
	const mealToUpdate = await knex("meals").where({ id: mealId });
	if (mealToUpdate.length > 0) {
		await knex("meals").where({ id: mealId }).update({
			for_when: req.query.for_when,
			price: req.query.price,
		});
		res.status(200).send(`Meal with id ${mealId} is Updated`);
	} else res.status(404).send(`Not found. Meal with id ${mealId} not exist`);
});

router.delete("/:id", async (req, res) => {
	let mealId = parseInt(req.params.id);
	const mealToDelete = await knex("meals").where({ id: mealId });
	if (mealToDelete.length > 0) {
		await knex("meals").where({ id: mealId }).delete();
		res.send(`Meal with id ${mealId} is deleted`);
	} else res.status(404).send(`Not found. Meal with id ${mealId} not exist`);
});

//to get all meals from table meals and
//Quering meals table
router.get("/", async (req, res) => {
	const {
		maxPrice,
		availableReservations,
		title,
		createdAfter,
		limit,
	} = req.query;

	let queriedMeals = knex("meals");

	if (maxPrice) {
		const maxPriceToNum = parseInt(maxPrice);
		queriedMeals = queriedMeals.where("price", "<", maxPriceToNum);
	}
	if (title) {
		queriedMeals = queriedMeals.where("title", "like", `%${title}%`);
	}
	if (availableReservations === "true") {
		queriedMeals = queriedMeals
			.join("reservations", "meals.id", "=", "reservations.meal_id")
			.where("meals.max_reservations", ">", "reservations.number_of_guests");
	}
	if (createdAfter) {
		const timeCreatedAfter = new Date(createdAfter);
		queriedMeals = queriedMeals.where("created_date", ">", timeCreatedAfter);
	}
	if (limit) {
		const limitTo = parseInt(req.query.limit);
		queriedMeals = queriedMeals.limit(limitTo);
	}
	const meals = await queriedMeals.select("*");
	if (meals.length === 0 || availableReservations === "false") {
		res.status(200).send("No result, empty");
	}
	res.json(meals);
});

router.use((err, req, res, next) => {
	res.status(400).send(err.message);
});

module.exports = router;

const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");
const { sum, limit } = require("../database");

//to get all meals from table meals
/*router.get("/", async (req, res) => {
	try {
		const meals = await knex("meals").select("*");
		res.json(meals);
	} catch (error) {
		throw error;
	}
});*/

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
	try {
		await knex("meals").insert(newMeal);
		res.send(`new meal inserted: ${newMeal.title}`);
	} catch (error) {
		throw error;
	}
});

//to get a meal by id
router.get("/:id", async (req, res) => {
	try {
		const mealId = parseInt(req.params.id);
		const meal = await knex("meals").where({ id: mealId });
		res.json(meal);
	} catch (error) {
		console.log("error in get by id", error);
	}
});

//to put/update a meal with specific id
router.put("/:id", async (req, res) => {
	let mealId = parseInt(req.params.id);
	try {
		await knex("meals")
			.where({ id: mealId })
			.update({ title: req.query.title });
	} catch (error) {
		throw error;
	}
});

//to delete a meal
router.delete("/:id", async (req, res) => {
	try {
		let mealId = parseInt(req.params.id);
		await knex("meals").where({ id: mealId }).delete();
	} catch (error) {
		throw error;
	}
});

//Quering meals table
router.get("/", async (req, res) => {
	const maxPrice = req.query.maxPrice;
	const availableReservations = req.query.availableReservations;
	const title = req.query.title;
	const createdAfter = req.query.createdAfter;

	if (maxPrice) {
		const maxPriceToNum = parseInt(maxPrice);
		const mealsCostLess = await knex("meals")
			.select()
			.where("price", "<", maxPriceToNum);
		res.json(mealsCostLess);
	} else if (title) {
		const mealsWithTitle = await knex("meals")
			.select("*")
			.where("title", "like", `%${title}%`);
		res.json(mealsWithTitle);
	} else if (availableReservations === "true") {
		const mealsWithAvailableReservation = await knex("meals")
			.join("reservations", "meals.id", "=", "reservations.meal_id")
			.select("meals.id", "meals.title", "meals.max_reservations")			
			.andHaving("meals.max_reservations", ">", "reservations.number_of_guests");

		res.json(mealsWithAvailableReservation);
	} else if (createdAfter) {
		const timeCreatedAfter = new Date(createdAfter);
		const mealsCreatedAfter = await knex("meals")
			.select("*")
			.where("created_date", ">", timeCreatedAfter);
		res.json(mealsCreatedAfter);
	} else if (limit) {
		const limitTo = parseInt(req.query.limit);
		const mealsLimitTo = await knex("meals").select("*").limit(limitTo);
		res.json(mealsLimitTo);
	} else {
		const allMeals = await knex.select("*").table("meals");
		res.json(allMeals);
	}
});

module.exports = router;

const express = require("express");
const router = express.Router();
const meals = require("../data/meals.json");

router.get("/", (req, res) => {
	const { maxPrice, title, createdAfter, limit } = req.query;

	let queriedMeals = meals;
	if (maxPrice) {
		const maxPriceValue = parseFloat(maxPrice);

		if (maxPriceValue) {
			queriedMeals = queriedMeals.filter((m) => m.price < maxPriceValue);
		} else {
			res.status(400).send(`Bad request, price should be a number`);
		}
	} 
	if (title) {
		queriedMeals = queriedMeals.filter((m) => m.title.toLowerCase().includes(title.toLowerCase()));
	} 
	if (createdAfter) {
		const date = Date.parse(createdAfter);

		if (!date && !(date instanceof Date)) {
			res.status(400).send("Bud request, input is not of type date");
		} else {
			queriedMeals = queriedMeals.filter((m) => Date.parse(m.createdAt) > date);
		}
	} 
	if (limit) {
		const limitValue = parseInt(limit);
		if (limitValue) {
			queriedMeals = queriedMeals.slice(0, limitValue);
		} else {
			res.status(400).send(`Bad request, input should be a number.`);
		}
	}
	if (queriedMeals.length > 0) {
		res.json(queriedMeals);
	} else {
		res.status(404).send(`404 Error. Meal not found`);
	}
});

router.get("/:id", (req, res) => {
	const mealId = parseFloat(req.params.id);
	if (!mealId) {
		res.status(400).send("Bud request, id should be a number.");
	} else {
		const mealWithThisId = meals.find((m) => m.id === mealId);
		if (!mealWithThisId) {
			res.status(404).send(`404 Error.There is no meal with this id: ${mealId}`);
		} else {
			res.json(mealWithThisId);
		}
	}
});
module.exports = router;

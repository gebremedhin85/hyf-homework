const express = require("express");
const router = express.Router();
const meals = require("../data/reviewed-meals");

router.get("/", (req, res) => {
	const maxPrice = req.query.maxPrice;
	const title = req.query.title;
	const createdAfter = req.query.createdAfter;
	const limit = req.query.limit;

	if (maxPrice) {
		const maxPriceValue = parseInt(maxPrice);
		if (!maxPriceValue) {
			res.status(404).send(`Enter price in number`);
		} else {
			const mealsInRangePrice = meals.filter((m) => m.price < maxPriceValue);
			if (mealsInRangePrice.length <= 0) {
				res.send(`There are no meals with price less than: ${maxPriceValue}`);
			} else {
				res.json(mealsInRangePrice);
			}
		}
	} else if (title) {
		const formatedTitle = title.replace(/[.*%+?^${}()|[\]\\]/g, "\\$&");
		const regularExpresion = new RegExp(
			"(?:^|\\W)" + formatedTitle + "(?:$|\\W)",
			"i"
		);
		const mealsWithTitle = meals.filter((m) => regularExpresion.test(m.title));
		if (mealsWithTitle.length > 0) {
			res.json(mealsWithTitle);
		} else {
			res.send(`There is no meal that has the word ${title} in its title`);
		}
	} else if (createdAfter) {
		const date = Date.parse(createdAfter);
		
		if (!date && !(date instanceof Date)) {
			res.status(404).send("Input is not of type date");
		} else {
			const mealsCreatedAfter = meals.filter(
				(m) => Date.parse(m.createdAt) > date
			);
			if (mealsCreatedAfter.length > 0) res.send(mealsCreatedAfter);
			else res.send(`There is no meal created after this date: ${date}`);
		}
	} else if (limit) {
		const limitValue = parseInt(limit);
		if (!limitValue) {
			res.status(404).send(`Enter a limit in number`);
		} else {
			let limitedNumberOfMeals;
			if (limitValue < meals.length) {
				limitedNumberOfMeals = meals.slice(0, limitValue);
				res.json(limitedNumberOfMeals);
			} else {
				res.json(meals);
			}
		}
	} else {
		res.json(meals);
	}
});

router.get("/:id", (req, res) => {
	const mealId = parseInt(req.params.id);
	if (!mealId) {
		res.send(`Enter an appropriate meal id number`);
	} else {
		const mealWithThisId = meals.find((m) => m.id === mealId);
		if (!mealWithThisId) {
			res.send(`There is no meal with this id: ${mealId}`);
		} else {
			res.json(mealWithThisId);
		}
	}
});

router.get("/", (req, res) => {
	res.json(meals);
});

module.exports = router;

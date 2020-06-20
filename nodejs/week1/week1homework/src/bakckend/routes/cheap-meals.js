function getCheapMeals() {
	const meals = require("../data/reviewed-meals");

	const averagePriceOfMeal = 100;
	const cheapMeals = meals.filter((meal) => meal.price <= averagePriceOfMeal);

	return cheapMeals;
}

module.exports = (req, res) => {
	res.json(getCheapMeals());
};

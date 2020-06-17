function getLargeMeals() {
	const meals = require("../data/reviewed-meals");

	const numberOfGuests = 10;
	const largeMeal = meals.filter(
		(meal) => meal.maxNumberOfGuests >= numberOfGuests
	);
	return largeMeal;
}

module.exports = (req, res) => {
	res.json(getLargeMeals());
};

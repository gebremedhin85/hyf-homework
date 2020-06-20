function getAMeal() {
	const meals = require("../data/reviewed-meals");

	const randomMeal = Math.floor(Math.random() * meals.length);
	const singleMeal = meals[randomMeal];
	return singleMeal;
}

module.exports = (req, res) => {
	res.json(getAMeal());
};

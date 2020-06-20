const meals = require("../data/reviewed-meals");

module.exports = (req, res) => {
	res.json(meals);
};

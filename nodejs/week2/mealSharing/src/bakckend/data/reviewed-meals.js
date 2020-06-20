function getMealsWithReviews() {
	const mealArr = require("./meals.json");
	const reviewArr = require("./reviews.json");

	return mealArr.map((meal) => {
		meal.reviews = reviewArr.filter((review) => review.mealId === meal.id);
		return meal;
	});
}
module.exports = getMealsWithReviews();

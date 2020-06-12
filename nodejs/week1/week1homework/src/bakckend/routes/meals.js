
function reviewMeals() {
    const  mealArr = require("../data/meals.json");
    const reviewArr = require("../data/reviews.json");

    return mealArr.map((meal)=>{
        meal.reviews = reviewArr.filter((review) => review.mealId === meal.id);
       return meal;
    })

}
module.exports=(req, res) => {
   res.json(reviewMeals());
}
function getCheapMeals(){
    
    const mealArr=require("../data/meals.json");
    const reviewArr=require("../data/reviews.json");

    const reviewMeals = mealArr.map((meal)=>{
        meal.reviews = reviewArr.filter((review) => review.mealId === meal.id);
        return meal;
    })
    //assuming cheap meals are with price less than 100 kr
    const cheapMeals = reviewMeals.filter((meal) =>  meal.price <= 100);
    
    return cheapMeals;
    
}
module.exports = (req, res) => {
    res.json(getCheapMeals());
}
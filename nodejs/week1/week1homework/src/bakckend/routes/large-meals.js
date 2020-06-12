function getLargeMeals(){
    
    mealArr=require("../data/meals.json");
  reviewArr=require("../data/reviews.json");

  const reviewMeals= mealArr.map((meal)=>{
      meal.reviews = reviewArr.filter((review) => review.mealId === meal.id);
      return meal;
  })
 const largeMeal=reviewMeals.filter((meal) =>meal.maxNumberOfGuests >= 10);
 return largeMeal;
   
}

module.exports = (req, res) => {
    res.json(getLargeMeals());
}
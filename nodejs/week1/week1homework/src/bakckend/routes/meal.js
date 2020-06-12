
function getAMeal(){
    
  mealArr=require("../data/meals.json");
  reviewArr=require("../data/reviews.json");

  const reviewMeal= mealArr.map((meal)=>{
      meal.reviews = reviewArr.filter((review) => review.mealId === meal.id);
      return meal;
  })
 const singleMeal=reviewMeal[1];
 return singleMeal;
}

module.exports = (req, res) => {
   res.json(getAMeal()); 
}




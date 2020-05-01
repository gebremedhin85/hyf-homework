//Create your own json file
//json file
const interestOfMine='{"freeTimeActivities":{"outDoorActivities":["swimming", "out door running", "foot ball"], "Tv":["comedy", "action film", "sport games"]}, "Food":["pizza", "spaghetti", "fruits"]}';
console.log(interestOfMine)

//json to object
const jsonToObj=JSON.parse(interestOfMine);
console.log(jsonToObj);

//manipulating the data after changing to js objects
console.log(jsonToObj.freeTimeActivities.outDoorActivities[2]);


//Find a cool api
//I find an interesting api for me. The link for it follows(urlLocation).
// It has an array that consist  several objects inside, json data. The api has many cool cat pictur
const urlLocation='https://api.thecatapi.com/v1/images/search?&x-api-key=a5fda0ef-a1a0-4659-bf64-f0300bb9a213';

 
fetch(urlLocation)
.then(res=>res.json())
.then(result=>{
    const jsArr=result[0].url;
console.log(jsArr);
document.querySelector('body').innerHTML=`<img src='${jsArr}'/>`;
})

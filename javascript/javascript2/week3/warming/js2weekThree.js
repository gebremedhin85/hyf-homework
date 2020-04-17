
//1. Called after 2.5 seconds the script is loaded.

function myFunction() {
    setTimeout(() => {
        console.log('Callback after 2.5 second');
       // document.querySelector("body").innerHTML = "Script loaded";
    }, 2500);

  
}
document.querySelector("script").onload =  ()=> myFunction();


//2. Delay -- strintToLog
function logAfter(delay, strintToLog){
    setTimeout(() => {
      console.log(strintToLog);  
    }, delay*1000);
}
 


//3. click event: for function in the above no.2
document.getElementById('click').addEventListener('click', function(){
    logAfter(5, 'Called after 5 seconds');
});


//4. Planet logger
 const earthLogger=function(){
     
    console.log('earth')
}
 
const saturnLogger=function(){
    
    console.log('Saturn');
}

function planetLogFunction(func){//with one function as parameter
  
    return func();
    
}
planetLogFunction(earthLogger);//passing argument as a function
planetLogFunction(saturnLogger);


//5. event: user Location(latitude, longitude)logger
function locations() {
    
    function latitudeLongtitude(possition){ // to get latitude and longtitude
    const coordinate = possition.coords;
  
    console.log(`This is the Latitude : ${coordinate.latitude.toFixed(15)}`);//decimal 16 digit after point
    console.log(`This is the Longitude: ${coordinate.longitude}`);
    }

    navigator.geolocation.getCurrentPosition(latitudeLongtitude);
  }
  
document.getElementById('location').addEventListener('click', locations);


//7. delay - callback - function

function runAfterDelay(delay, callback){
    
setTimeout(callback, delay*1000);//seconds changed to min-seconds
}
runAfterDelay(2.5, function(){
    console.log('Should be logged after 2.5 seconds');
})


// 8. clicked on the page
// Can I double click on a page within 0.5 seconds??

let doubleClicked = false;
let oneClicked=0;
 

const listenForClick = function(event){

     if(event){
             oneClicked++;
             if(oneClicked>=2)
             doubleClicked=true
        } 

    setTimeout(()=>{
        doubleClicked = false; 
    }, 500)

    if(doubleClicked){
        console.log("Double clicked!")
    }
}

document.addEventListener('click', listenForClick)
 


//9. jokeCreator
const logFunnyJoke= function(){// creating function logFunnyJoke as a variable
    console.log('It was funny joke');
}

const logBadJoke= function(){
    console.log('It was not funny joke');
}

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke){
    
    if(shouldTellFunnyJoke===true){
        return logFunnyJoke();
    }
    else if(shouldTellFunnyJoke===false){
        return logBadJoke();
    }
}
jokeCreator(false, logFunnyJoke, logBadJoke);//


//calling functions from an array of function
const  arrayFunctions = [ //array consisting of  functions declaration
    function funcOne() { console.log('This is function by declaration one') },
    function funcTwo() { console.log('This is  function declaration two') },
    function funcThree() { console.log('This is  function by declaration three') }
    ]

for (let i = 0; i < arrayFunctions.length; i++) {//applyed for- loop for calling for each function
    arrayFunctions[i]();
}


//array consisting of function expression
const  arrayOfFunctions = [ 
      functionOne =function() { const sume=4+5;
          console.log(sume) },
      functionTwo = function() { console.log('This is function expression two') },
      functionThree =function() { console.log('This is function expression three') }
    ]
    arrayOfFunctions.forEach(function(fun){
        fun();
    })


    //Create an object of key values are functions
    const objectFunctions={
        firstFunction : firstFunc=function() { console.log('This is object function one') },
        secondFunction : secondFunc=function(){ console.log('This is object function two') },
        thirdFunction : thirdFunc=function() { console.log('This is object function three') }
    }
    //calling each function
    objectFunctions.firstFunction();
    objectFunctions.secondFunction();
    objectFunctions.thirdFunction();

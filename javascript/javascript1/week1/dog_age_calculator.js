//A dog age calculator
 const dogYearOfBirth=2017;
 const dogYearFuture=2027;
 let dogYear= dogYearFuture-dogYearOfBirth;
//const humanYear=dogYearFuture-dogYearOfBirth;
ShowResultInDogYears=true; //boolean type of variable
if(ShowResultInDogYears) {
    console.log("\"Your dog will be "+dogYear*7+" dog years old in "+dogYearFuture + "\" ");
    } else{
    console.log("\"Your dog will be "+dogYear +" human years old in "+dogYearFuture +"\" ");
}
//OR: Using Function so that we can reuse
function clculateFutureAge(dogYearOfBirth, dogYearFuture, ShowResultInDogYears){
 dogYear=dogYearFuture-dogYearOfBirth;
if(ShowResultInDogYears) {
    console.log("\"Your dog will be "+dogYear*7+" dog years old in "+dogYearFuture + "\" ");
    } else{
    console.log("\"Your dog will be "+dogYear +" human years old in "+dogYearFuture +"\" ");
}
}
clculateFutureAge(2020, 2035, false);
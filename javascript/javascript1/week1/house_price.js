//A house price estimator
// For Peter house
let widthInMeters=8;
let depthInMeters=10;
let heightInMeters = 10;
let gardenSizeInM2=100;
let houseCosts=2500000;
let volumeInMeters= widthInMeters*depthInMeters*heightInMeters;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
if (housePrice > houseCosts){
    console.log("Peter is paying less");
} if (housePrice < houseCosts) {
    console.log("Peter is paying too much ");
} if(housePrice == houseCosts) {
   console.log("Peter is paying exact price");
}
console.log("Peter should have paid: " + housePrice);

//A house price estimator
// For Julia house
    let widthInMetersTwo=5;
    let depthInMetersTwo=11;
    let heightInMetersTwo = 8;
    let gardenSizeInM2Two=70;
    let houseCostsTwo=1000000;
    let volumeInMetersTwo= widthInMetersTwo*depthInMetersTwo*heightInMetersTwo;
    let housePriceTwo = volumeInMetersTwo * 2.5 * 1000 + gardenSizeInM2Two * 300;
    if (housePriceTwo < houseCostsTwo){
        console.log("Julia is paying too much");
    } if(housePriceTwo > houseCostsTwo) {
        console.log("Julia is paying less");
    } if(housePriceTwo == houseCostsTwo) {
        console.log("Julia is paying exact price");
    }
    console.log("Julia should have paid: " + housePriceTwo);
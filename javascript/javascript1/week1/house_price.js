//A house price estimator
// For Peter house
const widthInMeters=8;
const depthInMeters=10;
const heightInMeters = 10;
const gardenSizeInM2=100;
const houseCosts=2500000;
const volumeInMeters= widthInMeters*depthInMeters*heightInMeters;
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
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
function comparePrice(){ //Here function used only for the purpose that the variables could be re-assigned again
    const widthInMeters=5;
    const depthInMeters=11;
    const heightInMeters = 8;
    const gardenSizeInM2=70;
    const houseCosts=1000000;
    const volumeInMeters= widthInMeters*depthInMeters*heightInMeters;
    const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
    if (housePrice < houseCosts){
        console.log("Julia is paying too much");
    } if(housePrice > houseCosts) {
        console.log("Julia is paying less");
    } if(housePrice == houseCosts) {
        console.log("Julia is paying exact price");
    }
    console.log("Julia should have paid: " + housePrice);
}
comparePrice();
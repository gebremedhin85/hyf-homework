// Candy helper 
const boughtCandyPrices=[];
function addCandy(candyType, weight){
const pricePerGram=[0.5, 0.7, 1.1, 0.03];
    for(let i=0; i<pricePerGram.length; i++){
        if(candyType=="Sweet"){
        return boughtCandyPrices.push(weight*pricePerGram[0]);
        }else if(candyType=="Chocolate"){
            return boughtCandyPrices.push(weight*pricePerGram[1]);
        }else if(candyType=="Toffee"){
            return boughtCandyPrices.push(weight*pricePerGram[2]);
        }else if(candyType=="Chewing-gum"){
            return boughtCandyPrices.push(weight*pricePerGram[3]);
        } 
    }
}
//adding the prices
const addPrice1=addCandy("Sweet", 50);
const  addPrice2=addCandy("Chocolate", 15); 
const addPrice3=addCandy("Toffee", 10);
const addPrice4=addCandy("Chewing-gum", 300);

console.log(boughtCandyPrices);// prints array with four prices above

//Can i buy more? function
const amountToSpend=Math.random() * 100;
function canBuyMoreCandy(){
    let sumToPay=0;
    let i=0;
    while(boughtCandyPrices[i]){
        sumToPay+=boughtCandyPrices[i];
        i++;
    }   
     if(amountToSpend>sumToPay){
           return true;
       }else{
           return false;
       }
    }
    //checking if we can buy more candy
if(canBuyMoreCandy()){
    console.log("\""+"You can buy more, so please do!"+"\"") ;  
}else{
    console.log("\""+"Enough candy for you!"+"\""); 
}
canBuyMoreCandy();
 
console.log(amountToSpend);
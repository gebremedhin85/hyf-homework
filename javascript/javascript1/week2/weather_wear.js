// Weather wear
const clothesToWear=["shorts and t-shirt", "khakis trouser and light jacket", "Jeans trouser and normal jacket", "Jeans plus tights and winter jacketr"];
function putOnCloth(temparature){
    if (temparature>20){
        return clothesToWear[0];
    }else if(temparature>12){
        return clothesToWear[1];
    }else if(temparature>5){
        return clothesToWear[2];
    } else{
        return clothesToWear[3];
    }
}
const clothes=putOnCloth(15);
console.log("Clothes to wear: "+"\""+clothes+"\"");
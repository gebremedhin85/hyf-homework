const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function calculateTime(travelInformation){
     
      
    if(travelInformation.speed>0 && travelInformation.destinationDistance>=0){
       
        return Math.floor(travelInformation.destinationDistance*60/travelInformation.speed);//calculates travel time in munites
      }
  }
  
  const travelTime = calculateTime(travelInformation);
  console.log(Math.trunc(travelTime/60)+" Hours and "+ travelTime%60+" minutes"); //console: 8 Hours and 38 minutes
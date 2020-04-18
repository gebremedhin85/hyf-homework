//let timeInSecond=0;
const inputTag=document.getElementById("inputValue");
document.getElementById("buttonStart").enabled = false;

const getTimeInSecond=function(){
    
    let timeInSecond=inputTag.value;//input value in seconds
     
    let counterL=0;
    let counterS=0;
    let timeOut=true;

    const getWinner=function(){

       if(timeOut && !document.getElementById("buttonStart").enabled){
        //document.getElementById("buttonStart").enabled = true;
            if (event.key === 's' || event.key==='S') {//when char s is pressed
                
                counterS++;//counting for s press increment
                document.getElementById('pressS').innerHTML='Score:  '+counterS;
            }
            else if(event.key === 'l' || event.key==='L') {
               
                counterL++;
                document.getElementById('pressL').innerHTML='Score:  '+counterL;
            } 
        }  
    } 

     
    //setting event-listener for key press
    document.addEventListener('keydown', getWinner);
        
    //setting duration of the game in second
    setTimeout(() => {
        
        if(counterS > counterL){
            document.getElementById("winnerS").innerHTML='The Winner!!';  
        }
        else if(counterS < counterL){
            document.getElementById('winnerL').innerHTML='The Winner!!';  
        }
       else if((counterS >0) && (counterL>0) && (counterS===counterL)){ 
            document.getElementById('winnerS').innerHTML='It was draw';
            document.getElementById('winnerL').innerHTML='It was draw'; 
                
        }else if(counterS ===0 && counterL===0){ 
            document.getElementById('winnerS').innerHTML='Game not played';
            document.getElementById('winnerL').innerHTML='Game not played'; 
        }
         
         timeOut=false; //to stop the game after timer is over  
         document.getElementById("buttonStart").enabled = true;
         
        
    }, timeInSecond*1000);

}
  //for accessing the input of game duration
document.getElementById("buttonStart").addEventListener('click', getTimeInSecond)

//to restart the game again: the page is reload using the following event-listener
document.getElementById('restart').addEventListener('click', function(){location.reload()});


  
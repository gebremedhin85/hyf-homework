//let timeInSecond=0;
const inputTag=document.getElementById("inputValue");


const getTimeInSecond=function(){
    
    let timeInSecond=inputTag.value;//input value in seconds
     
    let counterL=0;
    let counterS=0;
    let timeOut=true;

    const getWinner=function(){
       if(timeOut){
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
        

    setTimeout(() => {
        
        
        if(counterS > counterL){
            document.getElementById("winnerS").innerHTML='The Winner!!';  
        }
        else if(counterS < counterL){
            document.getElementById('winnerL').innerHTML='The Winner!!';  
        }
        else if(counterS ==0 && counterL==0){ 
                document.getElementById('winnerS').innerHTML='Game not played';
                document.getElementById('winnerL').innerHTML='Game not played'; 
                    
        }else if(counterS == counterL){ 
            document.getElementById('winnerS').innerHTML='It was draw';
            document.getElementById('winnerL').innerHTML='It was draw'; 
                
    }
         timeOut=false; //to stop the game after timer is over  
         
        
    }, timeInSecond*1000);

}
  //for accessing the input of game duration
document.getElementById("buttonStart").addEventListener('click', getTimeInSecond)

//to restart the game again: the page is reload using the following event-listener
document.getElementById('restart').addEventListener('click', function(){location.reload()});


  
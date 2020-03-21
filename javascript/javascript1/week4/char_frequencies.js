 //Character frequency counter

 
 function getCharacterFrequencies(word, char){
    
    let count=0;
 
    characters=[{character:"", count:0}];
     if(typeof(word)==="string"){
       
         for(let i=0; i<word.length; i++){
              
              if(word[i]===char){
                
                 count +=1;
                  
               }    
         }   
     } 
    
     return count; 
 }
 console.log(getCharacterFrequencies("ababacedae", 'a'));
  
 
 
//Rewrite time
// Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises

function setTimeoutPromise(setTime){
  
    return new Promise(resolve=>{
        setTimeout(() => {
        
        resolve();
        
                
        }, setTime); 
    }) 
        
}

setTimeoutPromise(4000).then(()=>{

    console.log(`I am called asynchronously`);

})
 
 
    

//Using the navigater geolocation api as a promise
function getCurrentPosition(){
        
       return new Promise((resolve, reject) => {
            
            navigator.geolocation.getCurrentPosition(position=>{
                
                //when succed to get position
                const location= position;

                resolve(location);

            //when failed to find position
            }, error=>{
                
                error='error message';

                reject(error);
            })
             
       })
      
               
    }
getCurrentPosition()

    // called when the users position is found  
    .then((position) => {

         
                
            const latitude  = position.coords.latitude;

            const longitude = position.coords.longitude;

            console.log(`Lattitude: ${latitude} ;  Longitutde${longitude}`)
        
        })
        .catch((error) => {

            
            console.log(error);
    })    
   

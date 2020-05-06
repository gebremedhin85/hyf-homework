//Rewrite time
// Rewrite setTimeout and navigator.geolocation.getCurrentPosition to promises

function setTimeoutPromise(setTime){
  
    const p=new Promise(resolve=>{
      setTimeout(() => {
        
        resolve();
        console.log(`Called after ${setTime/1000} seconds`)
                
        }, setTime); 
  }) 
        
}
setTimeoutPromise(4000);
setTimeoutPromise(6000);
 
    

//Using the navigater geolocation api as a promise
function getCurrentPosition(){
        
       const promise= new Promise((resolve, reject) => {
            
            navigator.geolocation.getCurrentPosition(position=>{
                
                const location= position;//when succed to get position
                resolve(location);

            }, error=>{//when failed to find position
                
                error='error message';
                reject(error);
            })
             
       })
       return promise;
               
    }
getCurrentPosition()
       
    .then((position) => {
            // called when the users position is found
                
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Lattitude: ${latitude} ;  Longitutde${longitude}`)
        })
        .catch((error) => {
            // called if there was an error getting the users location
            console.log(error);
    })    
   

// Fetching and waiting
 //using promises and .then
 const url='https://dog.ceo/api/breeds/image/random';
 fetch(url).then(res=>res.json())
    .then(result=>{
      setTimeout(() => {
        
            console.log(result)//logged out after 3 second
         
    }, 3000);
 }) 
 
 
 // Fetching and waiting
 //using async/await
   
 async function asyncAwait(){
     
    const promise= await fetch(url); //fetching 
    const jsonPromise=await promise.json();
        

    setTimeout(( ) => {
         
            console.log(jsonPromise.status) //logged out after 3 second
         
    }, 3000);

 }
 asyncAwait();

 // I think the asyc/await method seems more convenient. 


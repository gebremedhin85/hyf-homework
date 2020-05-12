// Fetching and waiting
 //using promises and .then
const url='https://dog.ceo/api/breeds/image/random';

fetch(url).then(res=>res.json())

   .then(result=>{
      return new Promise((resolve) => {
         setTimeout(() => resolve(result), 3000);
      });

   }).then((data) => console.log(data));

 
// Fetching and waiting
//using async/await
   
async function asyncAwait(){
     
   const promise= await fetch(url); 

   const jsonPromise=await promise.json();


      setTimeout(( ) => {

         console.log(jsonPromise.status)  

      }, 3000);

}
asyncAwait();

// I think the asyc/await method seems more convenient. 


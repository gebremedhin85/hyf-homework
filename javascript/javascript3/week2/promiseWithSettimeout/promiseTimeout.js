//Promise that resolves after set time
 

function getResolvedAfter(resolveAfter) {
     

    return new Promise(resolve => {
        setTimeout(() => {
             
                resolve();
             
        }, resolveAfter*1000);
    });
}

getResolvedAfter(3)
    .then(() => {
        console.log('I am called asynchronously');  
    })
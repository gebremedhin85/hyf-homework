

//To translate one by one

/*
const translateOneByOne=()=>{

    //promise for red circle
    moveElement(document.querySelector('li:nth-child(1)'), {x: 20, y: 300})
        .then(() => {
            console.log('Element has been moved');

            //promise for blue circle
            return moveElement(document.querySelector('li:nth-child(2)'), {x: 400, y: 300})
        })

        
        .then(() => {
            console.log('Element has been moved');

            //promise for green circle
            return  moveElement(document.querySelector('li:nth-child(3)'), {x: 400, y: 20})
        })
    
        .then(() => {
            console.log('Element has been moved');
            return moveElement(document.querySelector('span'), {x: 200, y: 150})
        });
         
}
translateOneByOne();*/



//To translate all at the same time
const translateAllAtOnce=()=>{

    //promise for red circle
    const promiseRedCircle=moveElement(document.querySelector('li:nth-child(1)'), {x: 20, y: 300});

    //promise for blue circle
    const promiseBlueCircle=moveElement(document.querySelector('li:nth-child(2)'), {x: 400, y: 300});

    //promise for green circle
    const promiseGreenCircle=moveElement(document.querySelector('li:nth-child(3)'), {x: 400, y: 20});

    const promises=[promiseRedCircle, promiseBlueCircle, promiseGreenCircle]

    Promise.all(promises).then(()=>{
        console.log('Loged out after all elements have been moved at the same time');
    });
}
translateAllAtOnce();


 




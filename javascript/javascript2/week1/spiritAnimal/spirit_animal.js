//Spirit animal name generator

const buttonTag=document.getElementById('myButton');//to access button element in html

const inputTag=document.getElementById('myName');//to access input element in html

const pTag=document.querySelector('p');//to access p element in html

const animalList=['cat', 'dog', 'ship', 'goet', 'bull', 'hen', 'the running rabit', 'tiger', 'dog', 'cow']

buttonTag.addEventListener('click', function(event){

    const randomNumber=Math.floor(Math.random()*10);//if the user needs new spirit animal 

    let finalResult='';

    if(inputTag.value!==""){

        finalResult= pTag.innerText= inputTag.value +"- "+animalList[randomNumber];

    }else{

        finalResult= "You need to enter your name to generate spirit animal";

    }

    pTag.innerHTML=finalResult; 

})


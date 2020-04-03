//Doubling of number
const arrayNumbers=[1,2,5,6,11,12];

 
//map
const newArrayNumbers=arrayNumbers.map(num=>{ 
    //using map with anonemous arrow function 

    if(num%2===1){
        return num*2;  //to double  odd numbers
    }

   
    });

//console.log("The doubled numbers are, "+ newArray)


//Filter
const filteredArray= newArrayNumbers.filter(newNum=>{
   
    if(typeof(newNum)==='number')// filtering the numbers only from the new array that got from map function above
    
    return newNum;
    
    });
    console.log(filteredArray);

    const bodyTag=document.querySelector('body')

    const h2Tag=document.createElement('h2')
    h2Tag.innerText="Doubling the odd numbers";
    bodyTag.appendChild(h2Tag);
    
    const parTag=document.createElement('p')
    parTag.innerHTML="The numbers to be doubled and filtered are: "+ arrayNumbers;
    bodyTag.appendChild(parTag);

    
    const pTag=document.createElement('p')
    pTag.innerHTML="The doubled filtered numbers are: "+ filteredArray;
    bodyTag.appendChild(pTag);

 

const housePrices = [3000000,  3500000,  1300000,  40000000,  100000000,  8000000, 2100000];

// to calculate average
 
  let sumHousePrice=housePrices.reduce((a,b)=>{
      return a+b;
  }, 0);
 
   
  const averageHousePrice=parseInt(sumHousePrice/housePrices.length);

    
// to get median -

// median is a number on the center of list of ordered numbers or

// average of the two cetered numbers

function getMedian(housePrices){

    let median=0;

    housePrices.sort();
    const medianPoint=housePrices.length/2;

    if(medianPoint===0){//median  is average of the two ceter numbers

        median=(housePrices[medianPoint - 1] + housePrices[medianPoint])/2 ;


    }else {

        median=housePrices[(housePrices.length +1)/2];

    }

    return median;

}


//to  render in a web page 

const bodyTag=document.querySelector('body');

const h1Tag=document.createElement('h1')

h1Tag.innerText="The difference between average and median";

const pTag=document.createElement('p')

pTag.innerText='House prices: ['+ housePrices +']';

const parTag=document.createElement('p');

parTag.innerText=  'The Average of house prices is : ' + averageHousePrice + ' \n \n And the Median of house prices is : ' + getMedian(housePrices);

document.body.appendChild(h1Tag);

document.body.appendChild(pTag);

document.body.appendChild(parTag);
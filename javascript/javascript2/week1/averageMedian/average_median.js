const housePrices = [3000000,  3500000,  1300000,  40000000,  100000000,  8000000, 2100000];

// to calculate average
function getAverage(housePrices){

  let sumHousePrice=0;

  for(let i=0; i<housePrices.length; i++){

      sumHousePrice+=housePrices[i];
  }

  const averageHousePrice=parseInt(sumHousePrice/housePrices.length);

    return averageHousePrice;

};


// to get median -

// median is a number on the center of list of ordered numbers or

// average of the two cetered numbers

function getMedian(housePrices){

    let median=0;

    housePrices.sort();

    if(housePrices.length/2===0){//median  is average of the two ceter numbers

        median=(housePrices[housePrices.length/2 - 1] + housePrices[housePrices.length/2])/2 ;


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

parTag.innerText=  'The Average of house prices is : ' + getAverage(housePrices) + ' \n \n And the Median of house prices is : ' + getMedian(housePrices);

document.body.appendChild(h1Tag);

document.body.appendChild(pTag);

document.body.appendChild(parTag);
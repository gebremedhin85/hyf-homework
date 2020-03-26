console.log('Script loaded');

//console.log(getAvailableProducts());

/*function renderProducts(products){
    
    const ulProduct=document.querySelector('.products>ul');
     
    for(let i=0; i<products.length; i++){
        const prodctName=products[i];
        const liProduct=document.createElement('li')
        liProduct.innerHTML=prodctName; 
        ulProduct.appendChild(liProduct) 
    }
   
}
const testProductNames=['Flat screen', 'Mobile phone', 'Wallet'];
renderProducts( testProductNames)*/

//to render products by only name from the function getAvailableProducts()
//we need to improving the renderProducts function as follows:

/* 
function renderProducts(products){
    
    const ulProduct=document.querySelector('.products>ul');
     
    for(let i=0; i<products.length; i++){
        const prodctName=products[i];
        const liProduct=document.createElement('li')
        liProduct.innerHTML=prodctName.name; 
        ulProduct.appendChild(liProduct) 
    }
   //return prodctName;
}
const products = getAvailableProducts();
renderProducts(products);
console.log(products)*/


//to render products with more info from the function getAvailableProducts()
//we need to improving the renderProducts function as follows:
/*
function renderProducts(products){
    
    const ulProduct=document.querySelector('.products>ul');
     
    for(let i=0; i<products.length; i++){
        const prodctName=products[i];
        const liProduct=document.createElement('li')
        liProduct.innerHTML=prodctName.id+" | "+prodctName.name+" | "+prodctName.price+
        " | "+prodctName.rating+" | [ "+prodctName.shipsTo+" ]"; 
        ulProduct.appendChild(liProduct) 
    }
   //return prodctName;
}
const products = getAvailableProducts();
renderProducts(products);
 
*/



//Showing more details to the user in a nice way!

function creatListWithClass(elementTag, className, inputs){ //to make element with class
   
    const elementName=document.createElement(elementTag);

   elementName.className=className;
   elementName.innerHTML=inputs;

   return elementName;
}


function creatInsideLists(prodctName){ // to creat list for each product in side ul element
    
    const ulTag=document.createElement('ul')

    ulTag.appendChild(creatListWithClass('li', 'name', prodctName.name))
    ulTag.appendChild(creatListWithClass('li', 'price', prodctName.price))

    ulTag.appendChild(creatListWithClass('li', 'rating', prodctName.rating))
    ulTag.appendChild(creatListWithClass('li', 'shipsTo', prodctName.shipsTo))

    return ulTag;
}


//To render the products with their names, price, rating and countries to ships
function renderProducts(products){
    
    const tagUl=document.querySelector(".products ul");

    for(const prodctName of products){

        const liTag=document.createElement('li')

        liTag.appendChild(creatInsideLists(prodctName));
        tagUl.appendChild(liTag)
        
    }
}
const products = getAvailableProducts();
renderProducts(products);

 
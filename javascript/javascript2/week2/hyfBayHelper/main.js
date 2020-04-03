console.log('Script loaded');

  
//Showing more details of products to the user in a nice way!

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
 

         
 // to render filtered Products
 
const searchTag=document.querySelector("div.search>input")
 
searchTag.addEventListener('input', searchProducts);//Accessing input element

function searchProducts(){
   
    if(!searchTag.value){ //checking for an input's value
        renderProducts(products); 
        
    
    }else if(!(searchTag.value==="")){
        const newProducts= products.filter(product=>{ // applying filter
        
            searchInput=searchTag.value.toLowerCase();// to be sure for case sensetiveness
            productName=product.name.toLowerCase();

            return productName.includes(searchInput);// checkes for all possible how the product is discribed
                                
            });
            document.querySelector('section.products ul').innerHTML=""; //if there is input value, then clears product list
           
            renderProducts(newProducts)// renders filterd products to browser
    }
               
}
  searchProducts();
 
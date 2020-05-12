
//Shopping cart using Classes
 
//class product

class Product {

    constructor(name, price) {

        this.name = name;

        this.price = price;

    }

    
    // method to convert currency
    convertToCurrency(currency){

        if(currency.toLowerCase()==='dollars' ||currency.toLowerCase()==='dollar')

            return this.price/6.75;

        if(currency.toLowerCase()==='pound')

            return this.price/8;

        if(currency.toLowerCase()==='euro')

            return this.price/7.5;

    }
}



//class shopping cart starts

class ShoppingCart {

    constructor() {

        this.products = [];

    }
    

    //method for adding product to shopping cart
    
    addProduct(product) {

        this.products.push(product);
         
    }

    //method for removing product fro sh.cart
    removeProduct(product) {

        const productList=this.products.filter(formerProducts=>{

            return formerProducts.name !== product.name
        })

       this.products= productList;
    }


    //method for searching product in shopping cart
    searchProduct(productName) {
        
        let  searchOutput =[];         
        
        this.products.forEach(product=>{

            
            if(productName.toLowerCase() === product.name)

                searchOutput.push(product);

                
        })
          
       return searchOutput;
    }

   
    //method for calculating total price of products in shoping cart
    
    getTotal() {
       
         let totalPrice=0;

         this.products.forEach(product=>{
             
            totalPrice+=product.price;
          
        })

         return totalPrice;
         
    }


    //method for rendering to browser
    
    renderProducts() {
        
        const div=document.createElement('div'); 

        this.products.forEach(product=>{

            const p=document.createElement('p');

            p.innerText= 'This '+product.name +' costs '+ product.price+ ' kr ';

            div.appendChild(p);

             
        })

        return div;
            
       }

   
    
    getUser() {
        
       const url='https://jsonplaceholder.typicode.com/users/1';

       fetch(url)

        .then(res=>res.json())

        .then(users=>{

            return new Promise((resolve)=>{

                resolve(users);

            });

        }).then(user=>{

            console.log(user)
            
            const p=document.createElement('p');
            
            p.innerHTML=`User name: ${user.name} `;
           
            document.querySelector('body').appendChild(p);
        })
    }
}

//instant Shopping cart
const shoppingCart = new ShoppingCart();

//instant products class
const flatscreen = new Product('flat-screen', 5000);

const car = new Product('car', 200000);

const usedComputer = new Product('computer', 5000);

const mobile = new Product('mobile', 8000);

const computer = new Product('computer', 10000);

//adding product to cart
shoppingCart.addProduct(flatscreen);

shoppingCart.addProduct(car);

shoppingCart.addProduct(mobile);

shoppingCart.addProduct(computer);

shoppingCart.addProduct(usedComputer);

//removing a product
shoppingCart.removeProduct(flatscreen);

 //total price
console.log(shoppingCart.getTotal());

console.log(shoppingCart.products);

//searching a product
console.log(shoppingCart.searchProduct('computer'))

console.log(shoppingCart.searchProduct('Car'))


//rendering product name and its price
const body=document.querySelector('body');

const renderOutput=shoppingCart.renderProducts();

body.appendChild(renderOutput);

const p=document.createElement('p');

p.innerHTML='Total price: '+shoppingCart.getTotal();
 
body.appendChild(p);

//getting users
shoppingCart.getUser();


//To convert currency
const plant = new Product('plant', 50);

console.log(plant.convertToCurrency('Euro'))
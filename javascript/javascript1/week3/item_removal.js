//removing an element of an array using splice method
const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';
  
const foundIndex = names.indexOf(nameToRemove);
if(foundIndex >=0) {
    names.splice(foundIndex, 1);
}
console.log(names);
// ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
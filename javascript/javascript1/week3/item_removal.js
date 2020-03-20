//removing an element of an array using splice method
const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';
 
if(names.includes(nameToRemove)) {
    names.splice(names.indexOf(nameToRemove), 1);
}
 
console.log(names);
// ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
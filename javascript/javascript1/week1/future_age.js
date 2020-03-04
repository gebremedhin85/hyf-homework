//Age-ify (A future age calculator):
const yearOfBirth=1987;
const yearFuture=2027;
let age= yearFuture-yearOfBirth;

console.log("\"You will be "+age+" years old in "+yearFuture + "\".");

// OR: Reuse type(function)
function calculatAgeFuture(yearOfBirth, yearFuture){
    age= yearFuture-yearOfBirth;

console.log("\"You will be "+age+" years old in "+yearFuture + "\".");
}
calculatAgeFuture(1993, 2043);//assigning yearOfBirth and yearFuture
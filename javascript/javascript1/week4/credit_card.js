//Credit card number formatter

function formatCreditCardNumber(number){
      
  if(typeof(number)!=="number"){
     return "You need to enter numbers only";
  }else if(typeof(number)==="number"){
      const numb=number.toString();
      const formattedNumb=numb.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'');// to insert blank space every four digit
      return {original: number, formatted: formattedNumb, };//returs an object
   } 
}
console.log(formatCreditCardNumber(466688132));//{original: 466688132, formatted: "4666 8813 2"}
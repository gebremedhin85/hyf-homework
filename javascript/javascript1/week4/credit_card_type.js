 //credit card type identifying

 function getCardType(number) {
    const creditCards = {//list of object credit type and their possible card numbers      
        maestro: /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
        dankort: /^(5019)\d+$/,
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
        jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
        electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
    }

    for(property in creditCards) {
        if(creditCards[property].test(number)) {
            return property;
        }
    }
}
console.log(getCardType(4018500041421699));//visa
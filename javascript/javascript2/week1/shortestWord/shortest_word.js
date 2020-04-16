//Find the shortest word

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];

function getShortestWord(danishWords){

    let shortestWord=danishWords[0]; //iddex at 0 assumed the shortest word

    for (let i=0; i<danishWords.length; i++){

     if(shortestWord.length>danishWords[i].length){

            shortestWord=danishWords[i]; //then takes the one with shortest string length

        }   

    }

    return   shortestWord;

}

console.log(getShortestWord(danishWords)) 
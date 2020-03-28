 //Character frequency counter

 
 function getCharacterFrequencies(word) {
    const charSplit = word.split('');
     
    const objectChar = {};
     
    for (let i = 0; i < charSplit.length; i++) {
        const char = charSplit[i];
        if (!objectChar[char]) {
            objectChar[char] = 1;
        }
        else {
            objectChar[char]++;
        }
    }
    return objectChar;
}
const characterFrequency = getCharacterFrequencies('characters');

function splitCharacterFrequencies(characterFrequency) {
    const characterArr = [];
    let lengthArr = 0;
    
    for (const property in characterFrequency) {
        
        lengthArr += characterFrequency[property];

        characterArr.push({
            character: property,
            count: characterFrequency[property],
        });
    }
    const printObject = { characters: characterArr,
        length: lengthArr,}
    return printObject;
}
 
console.log(splitCharacterFrequencies(characterFrequency));
 
  
 
 
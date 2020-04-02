//Palindromic substring
function palindromic(givenString) {
    let reversedSubString = givenString.split("").reverse().join("");
    //console.log(reversedSubString);
    return givenString == reversedSubString;
}
    
function longestPalindromic(givenString){
    
    let maxLength = 0,
    palindromicMaxString = '';
    
    for(let i=0; i < givenString.length; i++) {
        const subStrings = givenString.substr(i, givenString.length);
        
        for(let j=subStrings.length; j>=0; j--){
            const subOfSubStrings = subStrings.substr(0, j);
            if (subOfSubStrings.length <= 1)
                continue;
            
                if (palindromic(subOfSubStrings)){
                    if (subOfSubStrings.length > maxLength){
                        maxLength = subOfSubStrings.length;
                        palindromicMaxString = subOfSubStrings;
                    }
            }
        }
    }
    
    return palindromicMaxString;
}
    console.log(longestPalindromic("abebeabebe3432"));
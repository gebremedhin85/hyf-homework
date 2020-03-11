//Flight booking full-name function
function getFullname(firstname, surname){
    if(firstname!="" && surname!=""){//empty string not allowed
    console.log("\""+firstname+" "+surname+"\"");
}else{
    console.log("enter appropriate first name and or  surname");
}
}
getFullname("Benjamin", "");

 
// Formal full-name case:
function getFullname(firstname, surname, useFormalName){
     
    const formalName="Lord"
    if(firstname!=="" && surname!=="" && useFormalName){
            return formalName+" "+firstname+" "+surname;
        }else if(firstname==="" || surname ==="" || useFormalName){
            return "enter appropriate first name and surname";
        }else if(firstname!=="" && surname!=="" && useFormalName!==true){
    return firstname+" "+surname;
}
}
const formallNameOne=getFullname("Benjamin ", "Hughes", true);
console.log("\""+formallNameOne+"\"");
 
const formallNameTwo=getFullname("Benjamin ", "");
// here getFullname('Benjamin ', 'Hughes') results: "Benjamin  Hughes"
console.log("\""+ formallNameTwo+"\"");
 


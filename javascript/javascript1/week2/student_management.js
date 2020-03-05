//Student manager
"use strict";

const class07Students = [];
const majesty="Queen"; 
const i=6;//max. number of students can be admitted
function addStudentToClass(studentName) {
    if(class07Students.length>=i && studentName!=majesty){ //condtion for max. no. students and for the special student Queen
        console.log("\""+ "Cannot add more students to class 07"+"."+"\"");
    }else if(class07Students.includes(studentName)){// condtion for not repeating same student registration
        console.log("\""+"Student "+studentName+" is already in the class"+"\"");
    }else if(studentName==""){// condition for not entering null name or array
        console.log("\""+"You need to add name"+"."+"\"");
    }else{
        return class07Students.push(studentName); 
    }
}

function getNumberOfStudents() {
    return class07Students.length;
}
// now adding students and testing the programme
const student1=addStudentToClass("Benjamin");
console.log(student1);

const student2=addStudentToClass("Breadon");
console.log(student2);

const studentOne=addStudentToClass("Benjamin");//do not allow the same entry again
console.log(studentOne);

const student3=addStudentToClass("Camela");
console.log(student3);

const student0=addStudentToClass("");
console.log(student0);

const student4=addStudentToClass("Alice");
console.log(student4);

const student5=addStudentToClass("David");
console.log(student5);

const student7=addStudentToClass("Jonas");
console.log(student7);

const student11=addStudentToClass("Malik");// we are full now, we cannot add more. 
console.log(student11);

const studentqueen=addStudentToClass(majesty);//the Queen is welcome no matter what
console.log(studentqueen);

const numberOfStudents=getNumberOfStudents();
console.log(numberOfStudents);

console.log(class07Students);


/*
const student9=addStudentToClass("");//null array will not added
console.log(student9);


const student6=addStudentToClass("Benjamin");//the same student will not be registered for second time
console.log(student6);

*/
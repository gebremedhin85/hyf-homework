const notes=[];
//Save or adding a note
function addNote(content, id){
    if(typeof(id)==="number"){
        const objectNote={content: content, id:id};
        notes.push(objectNote);
    }
}

//Get a note by id from saved notes
function getNoteFromId(id){
  
    for(let i=0; i<notes.length; i++){
        if(typeof(id)==="number" && notes[i].id===id){
             return notes[i].content;  
        }
        return "Provide correct id";//error message 
    } 
}
 
//to- Get all notes
function returnAllNotes(){
    return notes;
}

//Log out all notes with some kind of format
function logOutNotesFormatted(){
    for(let i=0; i<notes.length; i++){
    console.log("\""+"The note with id:"+notes[i].id+", has the following note text: "+"\""+notes[i].content+"\""+"."+"\"");
}
}
//To check the functions:
addNote("Some methodes that help to solve the problem", 13);
addNote("some text", 5);

console.log(getNoteFromId(13));
addNote("Some examples here follow", 20);

console.log(getNoteFromId("check it!"));
console.log(getNoteFromId());

console.log(returnAllNotes());

logOutNotesFormatted();


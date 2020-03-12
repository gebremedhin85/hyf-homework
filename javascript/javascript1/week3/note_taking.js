const notes=[];
//Save or adding a note
function addNote(content, id){
    const objectNote={};
      objectNote.content=content;
    objectNote.id=id;
    notes.push(objectNote);
}
addNote("Some methodes that help to solve the problem", 13);
addNote("some text", 5);

//Get a note by id from saved notes
function getNoteFromId(id){
  
    for(let i=0; i<notes.length; i++){
        if(typeof(id)==="number" && notes[i].id===id){
            return notes[i].content;
           
        }
    }
    return "Provide correct id";//error message
}
 
console.log(getNoteFromId(13));
addNote("Some examples here follow", 20);
console.log(getNoteFromId(10));
console.log(getNoteFromId("check it!"));
console.log(getNoteFromId());

//to- Get all notes
function returnAllNotes(){
    return notes;
}
console.log(returnAllNotes());

//Log out all notes with some kind of format
function logOutNotesFormatted(){
    for(let i=0; i<notes.length; i++){
    console.log("\""+"The note with id:"+notes[i].id+", has the following note text: "+"\""+notes[i].content+"\""+"."+"\"");
}
}
logOutNotesFormatted();


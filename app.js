//import file notes.js
const notes = require("./notes");
const fs = require("fs");
const yargs = require("yargs");


const title = yargs.argv.title;
console.log(title)
const body =yargs.argv.body;
const command = yargs.argv._[0]

if(command==="add"){
    console.log("Adding Note")
    notes.addingNote(title,body)
}else if(command==="remove"){
    console.log("removing note")
    notes.removeNote(title)
}else if(command==="read"){
    console.log("reading note")
    notes.readNote(title)
}else if(command==="list"){
    console.log("All notes")
    notes.allNotes()
}else{
    console.log("Unknown Command!!!")
}
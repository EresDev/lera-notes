const fs = require('fs')

const getNotes = function (){
    return "Your notes..."
}

const addNote = function addNote(title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log("Note saved.")
    } else {
        console.log("Duplicate note is not saved.")
    }
}

const saveNotes = function(notes){
    const notesStr = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesStr)
}

const loadNotes = function () {
    try {
        const buffer = fs.readFileSync('notes.json')
        const notesStr = buffer.toString()
        const notesJSON = JSON.parse(notesStr)
        return notesJSON
    } catch (e) {
        return []
    }
}

const removeNote = function(title){
    const notes = loadNotes()
    const remainingNotes = notes.filter(function(note){
        return note.title != title
    });
    
    if(notes.length === remainingNotes.length){
        console.log("Unable to find note with title: " + title)
    } else {
        saveNotes(remainingNotes)
        console.log("Note removed with title: " + title)
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}
const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse("Note saved."))
    } else {
        console.log(chalk.red.inverse("Duplicate note is not saved."))
    }
}

const saveNotes = (notes) => {
    const notesStr = JSON.stringify(notes)
    fs.writeFileSync('notes.json', notesStr)
}

const loadNotes = () => {
    try {
        const buffer = fs.readFileSync('notes.json')
        const notesStr = buffer.toString()
        const notesJSON = JSON.parse(notesStr)
        return notesJSON
    } catch (e) {
        return []
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const remainingNotes = notes.filter((note) => note.title != title)
    
    if(notes.length === remainingNotes.length){
        console.log(chalk.red.inverse("Unable to find note with title: " + title))
    } else {
        saveNotes(remainingNotes)
        console.log(chalk.green.inverse("Note removed with title: " + title))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.green.inverse('Your Notes'));
    notes.forEach((note) => {
        console.log(note.title)
    });
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(chalk.green.inverse(note.title))
        console.log(note.body)
    } else{
        console.log(chalk.red.inverse("Note not found"))
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
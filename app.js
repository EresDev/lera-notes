const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'Add a note.', 
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        console.log('Title: ', argv.title)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function() {
        console.log('Removing a note.')
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function() {
        console.log('Listing notes.')
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title'
        }
    },
    handler: function(argv) {
        console.log('Reading a note.' , argv)
    }
})

yargs.parse()

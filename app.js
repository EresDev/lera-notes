const chalk = require('chalk')
const { exit } = require('yargs')
const yargs = require('yargs')
const getNotes = require('./notes.js')

yargs.version('1.1.0')
console.log(yargs.argv)
yargs.command({
    command: 'add',
    description: 'Add a note.', 
    handler: function (){
        console.log('Adding a note.')
    }
})

process.exit()
const command = process.argv[2]

if(command === 'add'){
    console.log('Adding note!')
} else if (command === 'remove') {
    console.log('Removing note!')
}
 
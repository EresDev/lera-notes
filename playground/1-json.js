const fs = require('fs')

const personBuffer = fs.readFileSync('data.json')
const personStr = personBuffer.toString()
const personJSON = JSON.parse(personStr)
personJSON.name = 'Olive'
personJSON.age = 33

const updatedPersonStr = JSON.stringify(personJSON)
fs.writeFileSync('data.json', updatedPersonStr)


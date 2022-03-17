
const fs = require('fs');
const util = require('util');

const fsRead = util.promisify(fs.readFile);
const fsWrite = util.promisify(fs.writeFile);

const writeToFile = parsedNotes =>
fsWrite('./db/db.json', JSON.stringify(parsedNotes, null, 4), (err) =>
err ? console.error(err) : console.info('sucess'));


const readFromFile = () => {
   return fsRead('./db/db.json', 'utf8')
}

const addNote = (newNote) => {
    fsRead('./db/db.json', 'utf8').then(data => {
        const parsedData = JSON.parse(data); 
        parsedData.push(newNote);
        writeToFile(parsedData);
    })
} 

module.exports = {readFromFile, addNote}
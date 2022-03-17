
const notes = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const {addNote, readFromFile} = require('../helper/fsUtils');

//GET route for retrieving notes
notes.get('/',(req, res) => 
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
);

// POST route for notes
notes.post('/', (req, res) => {
    //Deconstruction assignment in req.body
    const {title, text} = req.body;

    if (title && text) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        addNote(newNote, './db/db.json');

        const reponse = {
            status: 'success',
            body: newNote,
        };

        res.json(response);
    } else {
        res.json('Error in posting note');
    }
});


module.exports = notes;
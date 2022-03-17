
const express = require('express');
const html = require('./html_routes.js');
// imports modular routes for notes
const notesRouter = require('./notes');

const app = express();

app.use('/api/notes', notesRouter);
app.use('/', html);

module.exports = app;
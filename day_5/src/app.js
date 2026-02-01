const express = require('express');


const app = express();


const notes = [];

app.use(express.json());

app.post('/notes', (req, res) => {
    const note = req.body;
    notes.push(note);
    res.status(201).send({ message: 'Note added successfully' });
});

app.get('/notes', (req, res) => {
    res.send(notes);
    res.status(200).send({
        message: 'Notes retrieved successfully',
        notes: notes
    });
})
app.delete('/notes/:index', (req, res) => {
    delete notes[req.params.index];
    res.status(200).send({
        message: 'Note deleted successfully'
    });
});

app.patch('/notes/:index', (req, res) => {
    const updatedNote = req.body;
    notes[req.params.index] = updatedNote;
    res.status(200).send({
        message: 'Note updated successfully'
    });
});

module.exports = app;

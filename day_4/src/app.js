const express = require('express');




const app = express();
app.use(express.json());
const notes = [
   
];



app.post('/notes', (req, res) => {
    console.log(req.body);
    notes.push(req.body);
    res.send('Note received');
    console.log('Current Notes:', notes);
    
    
});
app.get('/notes', (req, res) => {
    res.send(notes);
    
});
app.delete('/notes/:index', (req, res) => {
    console.log(req.params.index);
    delete notes[req.params.index];
    res.send('Note deleted');
});

module.exports = app;

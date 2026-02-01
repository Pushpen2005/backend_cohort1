const express = require('express');
const app = express();


const notes = [];
app.use(express.json());


app.post('/notes', (req, res) => {
   console.log(req.body);
   notes.push(req.body);

    res.send('Create a new note');
});
app.get('/notes', (req, res) => {
    res.json("hdfdfhdfghi");
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

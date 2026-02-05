const express = require('express');



const app = express();
app.use(express.json());
const notemodel = require('./models/note.model');
const cors = require('cors');
const path = require('path');
app.use(cors());
app.use(express.static("./public"));

app.post('/api/notes', async (req ,res) =>{
const{ title,description} = req.body;
      const note = await notemodel.create(
        {
            title,
            description
        }
      )
      res.status(201).json({
        message: "note created successfully"
      })

})
app.get('/api/notes', async (req, res) => {
    const notes = await notemodel.find();

    res.status(200).json({
        message: "notes fetched successfully",
        data: notes
    })
})
app.delete('/api/notes/:id', async (req, res) => {
    const id = req.params.id;
    await notemodel.findByIdAndDelete(id);
    res.status(200).json({
        message: "note deleted successfully"
    });
})

app.patch('/api/notes/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  await notemodel.findByIdAndUpdate(id, {
    title,
    description
  });

  res.status(200).json({
    message: "note updated successfully"
  });
});
app.use('*name', (req, res) => {
    res.sendFile(path.join(__dirname,"..","/public/index.html"));
});

module.exports = app;
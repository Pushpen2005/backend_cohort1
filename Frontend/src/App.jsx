import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {

  const [notes, setNotes] = useState([]);
  const [edittitle, setEditTitle] = useState("");
  const [editdescription, setEditDescription] = useState(""); 
  const [editId, setEditId] = useState(null);

  function fetchNotes() {
    axios.get('http://localhost:3000/api/notes')
      .then((res => {
        setNotes(res.data.data)
      }))
    }  

  useEffect(() => {
    fetchNotes();
  }, [])
  function handleSubmit(e) {
  e.preventDefault();

  if (editId) {
    // UPDATE
    axios.patch(`http://localhost:3000/api/notes/${editId}`, {
      title: edittitle,
      description: editdescription
    }).then(() => {
      fetchNotes();
      setEditId(null);
      setEditTitle("");
      setEditDescription("");
    });
  } else {
    // CREATE
    axios.post('http://localhost:3000/api/notes', {
      title: edittitle,
      description: editdescription
    }).then(() => {
      fetchNotes();
      setEditTitle("");
      setEditDescription("");
    });
  }
}

function handleEdit(note){
  setEditId (note._id);
  setEditTitle (note.title);
  setEditDescription (note.description);
}

function handleDelete(id){
  axios.delete("http://localhost:3000/api/notes/"+id).then(res => {
    console.log(res.data);
    fetchNotes();
  })
}
  return (
<>
<form className='note-create-form' onSubmit={handleSubmit }>
  <input value={edittitle} name='title' type="text" placeholder="Title"  onChange={(e) => setEditTitle(e.target.value)}/>
  <input value={editdescription} name='description' type="text" placeholder="Description"  onChange={(e) => setEditDescription(e.target.value)}/>
  <button type="submit">
  {editId ? "Update Note" : "Create Note"}</button>
</form>

    <div className="notes">
      {
        notes.map(note => {
          return <div className="note">
            <h1>{note.title}</h1>
            <p>{note.description}</p>
            <button onClick={() => {
              handleDelete(note._id)
            }} >delete</button>
            <button onClick={() => {
              handleEdit(note)
            }}>edit</button>

          </div>

        })
      }
    </div>
    </>
  )
}

export default App

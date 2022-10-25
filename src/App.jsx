import { useState } from "react";
import uuid from "react-uuid"
import Main from "./components/Main"
import SideBase from "./components/SideBase"


const App =() => {
const [notes, setNotes] = useState([]);

const [noteCible, setNoteCible] = useState(false)

const onAddNote = () => {
  const newNote = {
    id: uuid(),

    title: "No title Note",

    body: "",

    lastModified: Date.now()
  };

  setNotes([newNote,...notes]); 
};

const updateNote = (updatedNote) => {
  const updateNotesArray = notes.map((note)=> {
    if(note.id === noteCible) {
      return updatedNote;
    }
    return note;
  })

  setNotes(updateNotesArray);
}

const onDeleteNote = (idToDelete) => {
  setNotes(notes.filter((note)=> note.id !== idToDelete));
};

 const getActiveNote= () => {
  return notes.find((note)=> note.id === noteCible);
 };
  return (
    
  <div className="App">
  <SideBase 
  notes ={notes} 
  onAddNote={onAddNote} 
  onDeleteNote={onDeleteNote}
  noteCible={noteCible}
  setNoteCible={setNoteCible}
   />
  <Main noteCible={getActiveNote()} updateNote={updateNote} />
  </div>
  )
};

export default App;
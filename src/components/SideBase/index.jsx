function SideBase({ notes, onAddNote, onDeleteNote, noteCible, setNoteCible}) {
  
  return (
  <div className="app-sidebase">
  
    <div className="app-sidebase-header">
  
      <h1>Notes</h1>
      <button onClick={onAddNote}>Add</button>
  
    </div>
  
    <div className="app-sidebase-notes">
       {notes.map((note) =>(
  
         <div className={`app-sidebase-note ${note.id === noteCible && "active"}`}
          onClick={()=>setNoteCible(note.id)}>
        <div className="sidebase-note-title">
          <strong>{note.title}</strong>
          <button onClick={() => onDeleteNote(note.id)}>Delete</button>
        </div>
        <p>{note.body}</p>
        <small className="note-meta">
          Last Modified {""}
          {new Date(note.lastModified).toLocaleDateString("en-FR",{
          hour: "2-digit",
          minute: "2-digit",
        })}
        </small>
  
      </div>
       ) )}
     
    </div>
  </div>
  )
  }
  
  export default SideBase ;
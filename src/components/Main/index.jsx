function Main({ noteCible, updateNote }) {
  const editField = (key , value) => {
    updateNote({
      id: noteCible.id,
      [key]: value,
  
      lastModified: Date.now(),
  });
  };
  if(!noteCible) return <div className="no-active-note">Selected</div>
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" id="title" value={noteCible?.title} onChange={(e) => editField("title", e.target.value)} autoFocus />
        <textarea id="body" placeholder="Write your things here ..." value={noteCible?.body} onChange={(e) => editField("body", e.target.value)}/>
      </div>
  
      <div className="app-main-note-preview">
        <h1 className="preview-title">{noteCible?.title}</h1>
        <div className="markdown-preview">{noteCible?.body}</div>
  
      </div>
    </div>
  )
  }
  
  export default Main;
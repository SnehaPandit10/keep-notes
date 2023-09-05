import { useState } from 'react';
import './App.css';
import { Keep } from './component/Keep';
import { KeepList } from './component/KeepList';

function App(props) {
  const [notes, setNotes] = useState([]);

  const addNotes=(newNote)=> {
    setNotes((preValue) => {
      return [...preValue, newNote];
    })
  }
  
  const deleteNote=(id)=>{
    setNotes((preValue)=>{
      return[...preValue.filter((note,index)=>index!== id)];
    })
  }
  return (
    <>
      <Keep onAdd={addNotes} />
      {notes.map((note, index) => (
        <KeepList
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}

    </>
  );
}

export default App;

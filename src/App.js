import Header from './Header';
import './App.css';
import NoteList from './NoteComponents/NoteList';
import CreateNote from './NoteComponents/CreateNote';
import { useState } from 'react';

function App() {
  const [noteList, setNoteList] = useState([]);

  const addNote = (note) => {
    setNoteList((prev) => {
      return([...prev, note]);
    });
    // console.log(noteList);
  }

  console.log("Developed by Prasad Jamabhle");
  const deleteHandle = (id) => {
    const filterNote = noteList.filter((data, idx) => {
      return(id !== data.id);
    });
    // console.log(filterNote);
    setNoteList(filterNote);
    
  }

  const editHandle = (id, note) => {
    const filterNote = noteList.filter((data, idx) => {
      return(id !== data.id);
    });
    // console.log(filterNote);
    setNoteList(filterNote);
    addNote(note);
  }

  // console.log(noteList);

  return (
    <>
    <Header />
    <CreateNote addNote={addNote}/>
    <NoteList nlist={noteList} deleteHandle={deleteHandle} editHandle={editHandle}/>
    </>
  );
}

export default App;

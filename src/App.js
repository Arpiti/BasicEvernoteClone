import './App.css';

import { useReadFirestore } from './hooks/useReadFirestore';
import { updateFirestore } from './hooks/useUpdateFirestore';
import { createFirestore } from './hooks/useCreateFirestore';

import Sidebar from './comps/sidebar/Sidebar';
import Editor from './comps/editor/Editor';
import React, { useState } from 'react';

function App() {

  const [selectedNote, setSelectedNote] = useState(null);
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const notes = useReadFirestore('notes');
  
  console.log('This is from App()');

  const selectNote = (note, index) => {
    console.log('This is from select Note in App()');

    setSelectedNoteIndex(index);
    setSelectedNote(note);
  }

  const deleteNote = () => {
    console.log('This is from Delete Note in App()');
  }

  const noteUpdate = (id, noteObj) => {
    console.log('Note update method >>', id, ' and ', noteObj);
    updateFirestore('notes',id, noteObj);
  }

   const newNote = async (title) => {
    const note = {
      title : title,
      body : ''
    };
    const newFromDB = await createFirestore('notes',note);
    const newId = newFromDB.id;
    notes.push(note);
    const newNoteIndex = notes.indexOf(notes.filter(note => note.id === newId)[0]);
    setSelectedNote(notes[newNoteIndex]);
    setSelectedNoteIndex(newNoteIndex);
  }

  return (
    <div className="app-container">
      <Sidebar notes={notes}
        selectedNoteIndex={selectedNoteIndex}
        selectNote={selectNote}
        deleteNote={deleteNote}
        newNote={newNote}>
      </Sidebar>
      {selectedNote ? <Editor selectedNote={selectedNote} selectedNoteIndex={selectedNoteIndex}
        notes={notes} noteUpdate={noteUpdate}></Editor> : <p>Please select a note from the panel or create a new note</p>}
    </div>
  );
}

export default App;

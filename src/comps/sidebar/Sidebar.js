import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import { Divider, Button } from '@material-ui/core'
import List from '@material-ui/core/List'
import Sidebaritems from '../sidebaritems/Sidebaritems'

const Sidebar = ({ notes, classes, selectedNoteIndex, selectNote, deleteNote, newNote }) => {

    const [addingNote, setAddingNote] = useState(false);
    const [title, setTitle] = useState(null);

    const newNoteBtnClick = () => {
        setAddingNote(!addingNote);
        console.log('New Note button Click');
    }

    const handleNewNote = () => {
        console.log('Submit button Clicked');
        console.log('Title>>', title);
        newNote(title);
        setTitle(null);
        setAddingNote(false);
    }

    return (
        <div className={classes.sidebarContainer}>
            <Button onClick={newNoteBtnClick}
                className={classes.newNoteBtn}>
                {addingNote ? 'Cancel' : 'New Note'}
            </Button>
            {addingNote &&
                <input type='text'
                    className={classes.newNoteInput}
                    placeholder='Enter Note Title'
                    onKeyUp={(event) => setTitle(event.target.value)}>
                </input>}
            {addingNote &&
                <Button className={classes.newNoteSubmitBtn}
                onClick={handleNewNote}>
                Submit Note
                </Button> }
            <List>
                {
                    notes.map((note, index) => {
                        return (
                            <div key={index}>
                                <Sidebaritems
                                     note={note}
                                     index={index}
                                     selectedNoteIndex={selectedNoteIndex}
                                     selectNote={selectNote}
                                     deleteNote={deleteNote}>
                                </Sidebaritems>
                                <Divider/>
                            </div>
                        )
                    })
                }
            </List>
        </div>
    ) 
}

export default withStyles(styles)(Sidebar);
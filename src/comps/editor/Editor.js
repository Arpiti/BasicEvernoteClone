import React, {useState, useEffect, useMemo} from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';
import ReactQuill from 'react-quill';
import debounce from '../../utility/helper';

const Editor = ({selectedNote, selectedNoteIndex, notes, classes, noteUpdate}) => {

    console.log('This is from Editor render');
   

    const [text, setText] = useState('');
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');
   
    
    let memoTitle = useMemo(() => title,[title]);

    useEffect(() => {

       
        if(memoTitle !== selectedNote.title)
        {
            setText(selectedNote.body);
            setTitle(selectedNote.title);
            setId(selectedNote.id);
        }
    }, [selectedNote,memoTitle]);

    const updateBody = async (val) => {
        await setText(val);
        console.log('id from top >>', id);
        update(); 
    }

    const update = 
		debounce(() => {
			console.log('updating database!');
            noteUpdate(id,{title,text});
		}, 1500);



return (
<div className={classes.editorContainer}>
    <ReactQuill value={text} onChange={updateBody}></ReactQuill>
</div>);
}


export default withStyles(styles)(Editor);
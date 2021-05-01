import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeHTMLTags } from '../../utility/helper';

const Sidebaritems = ({note, index, classes, selectedNoteIndex, selectNote, deleteNote}) => {


    const handleClickDeleteIcon = ()=>{
        if(window.confirm(`Are you sure, you want to Delete - ${note.title}`))
            deleteNote(note);
    }

    const handleTextClick = () => selectNote(note,index)

    console.log('SelectedNoteIndex >> ', selectedNoteIndex);

    return (
        <div key={index}>
           <ListItem
                className={classes.listItem}
                selected={selectedNoteIndex === index}
                alignItems='flex-start'>
                    <div className={classes.textSection}
                        onClick={handleTextClick}>
                        <ListItemText
                            primary={note.title}
                            secondary={removeHTMLTags(note.body.substring(0,30))+'...'}>

                        </ListItemText>
                    </div>
                <DeleteIcon
                    onClick={() => handleClickDeleteIcon()}
                    className={classes.deleteIcon}>
                </DeleteIcon>
           </ListItem>
        </div>
        );
}

export default withStyles(styles)(Sidebaritems);
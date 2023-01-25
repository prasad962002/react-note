import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import { Stack } from "@mui/system";

const CreateNote = ({ addNote }) => {
    
    const [idCount, setIdCount] = useState(0)
    const [note, setNote] = useState({
    
        id: idCount,
        title: '',
        content: ''
    });

    //Handle Input
    const handleInput = (e) => {
        const { name, value } = e.target;
        // console.log(value);
        setNote((prev) => ({ ...prev, [name]: value, id: idCount}));
    }

    //Handle Submit and add note
    const handleSubmit = () => {
        if(note.title != '' || note.content != ''){
            addNote(note);
            setIdCount(idCount + 1);
            setNote({id: idCount, title :'', content :''});
        }
    }

    //character limit
    const charLimit = 150;
    const charLeft = charLimit - note.content.length;

    return (
        <>
        
            <Container maxWidth="sm" >
                <Paper elevation={5} >
                    <Card variant="outlined">
                        <CardContent>
                            <FormGroup>
                                <TextField title="Title" autoComplete='off' maxLength="100" name="title" value={note.title} placeholder='Title' variant="standard" onChange={handleInput} />
                                <textarea placeholder="Take a note..." maxLength="150" row={3} name="content" value={note.content} onChange={handleInput} style={{ width: "100%", border: "none", outline: "none", resize: "none", fontFamily: "Roboto", fontSize: "large" }}></textarea>
                            </FormGroup>

                        </CardContent>
                        <CardActions sx={{ justifyContent: "flex-end" }}>
                            <span className="label" style={{marginRight : "100px"}}>{charLeft} Characters left</span>
                            <Button type='submit' size="small" onClick={handleSubmit} variant='contained' color='success'><AddIcon /></Button>
                        </CardActions>
                    </Card>
                </Paper>
            </Container>
        </>
    );
}

export default CreateNote;
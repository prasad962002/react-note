import React from "react";
import Note from "./Note";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Container } from "@mui/material";

const NoteList = (props) => {
    return(
    <>
        <Container>
    <Grid2 container spacing={3} xs="auto" sx={{mt :'50px'}}>

        {
            // console.log( "props",props.nlist)
            props.nlist.map((data, id) => {
                return (<Note key={id} text={data} deleteHandle={props.deleteHandle} editHandle={props.editHandle}/>);
                })
            }                
      
        </Grid2>
        </Container>
            </>
        );
    }

export default NoteList;

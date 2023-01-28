import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from '@mui/material';

export default function Note(props) {
  // console.log("Titlelllel",props.text.title);
  let id = props.text.id;
  let title = props.text.title;
  let content = props.text.content;

  const [edit, setedit] = React.useState(false);

  const onClickedit = (e) => {
    setedit(true);
    document.getElementById(`${id + 2000}`).focus();
    // props.editHandle(id);
    // document.getElementById('id').parentNode
  }

  const onClickdone = () => {
    setedit(false);
    let newTitle = document.getElementById((id + 1000)).innerText;
    let newContent = document.getElementById((id + 2000)).innerText;
    // console.log(newContent.length);
    // console.log(newTitle.length);
    if(newContent.length >= 150 || newTitle.length >= 150){
      alert("Maximum Characters Length is  150");
    }
    else{
      const note ={
        id : id,
        title : newTitle,
        content : newContent
      };
      // console.log(note);
      props.editHandle(id, note);
    }
  }
  return (
    <>
    <Grid2 item xs="auto">

    <Paper sx={{ minWidth: 345, maxWidth : 345, maxHeight : "auto" }} elevation={3}>
      <Card  variant="outlined" sx={{ background: "rgba(255, 255, 255, 0)" }}>
      <CardContent >
    <Typography id = {id + 1000}  contentEditable={edit} style={{ overflow: 'none', overflowWrap: "anyWhere", fontSize : "large", color: "grey"}} suppressContentEditableWarning={true}>
      {title?title: "Title"}
      </Typography>

    <Divider/>
    
    <p id = {id + 2000} contentEditable={edit} suppressContentEditableWarning={true} style={{overflowWrap: "anyWhere", overflow: 'auto'}}>{content?content : null}</p>
    </CardContent>
    <CardActions sx={{ justifyContent: "flex-end" }}>
    <Stack direction="row" spacing={1}>
      {!edit?(<IconButton color='primary'  title="edit" aria-label="edit" onClick={onClickedit}>
        <EditIcon />
      </IconButton>) :
      (<IconButton color='success'  title="Done" aria-label="edit" onClick={onClickdone}>
        <DoneOutlineIcon />
      </IconButton>)}

      <IconButton color="error" size="large" title="delete" aria-label="delete" onClick={() => props.deleteHandle(id)}>
        <DeleteIcon fontSize='inherit'/>
      </IconButton>
      </Stack>
      {/* <Button size="small" variant='contained' color='error'  onClick={() => props.deleteHandle(props.id)} ><DeleteIcon/></Button> */}
    </CardActions></Card>
    </Paper>
    </Grid2>
    </>
  );
}
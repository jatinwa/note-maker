import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import '../App.css'
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { db } from '../firebase';
import { setDoc, doc , serverTimestamp } from 'firebase/firestore';

const EditNote = () => {

  const { id } = useParams();

  const [data, setData] = useState({title: '', description: ''});

  const handleSubmit = async (event) => { 
   event.preventDefault();
   
   const noteRef = doc(db, 'notes', id);
   await setDoc(noteRef, {...data, timestamp: serverTimestamp()}, { merge: true });
   clear();
  }

  const clear = () => {
    setData({title: '', description: ''});
  }

  

  return (
    <div className="input-note">
      <h1>Edit your note!</h1>
      <Paper elevation={12}>
      <TextField style={{ margin: '15px' , width: '90%'}} id="outlined-basic" name="title" label="Title" value={data.title} variant="outlined" onChange={(e) => setData({...data,title: e.target.value})} />
      <TextField style={{ margin: '15px' , width: '90%'}} label="Description" name="description" value={data.description} variant="outlined" onChange={(e) => setData({...data,description: e.target.value})} multiline minRows={3}/>
      <div >
      <Button style={{ margin: '15px'}} variant="contained" onClick={handleSubmit} >Save</Button>
      <Button variant="outlined" onClick={clear} >Clear All</Button>
      </div>
      </Paper>
    </div>
  )
}

export default EditNote
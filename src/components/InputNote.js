import React, { useState } from 'react'
import '../App.css';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { db } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { useCollection } from 'react-firebase-hooks/firestore';

const InputNote = () => {

  const { id } = useParams();

  const [success, setSuccess] = useState(false);
  const [data, setData] = useState({title: '', description: ''});
  
  const [notesSnapshot] = useCollection(collection(db, "notes"));
  
  const handleSubmit = async (event) => { 
   event.preventDefault();
   if(data.title === ''){
    alert('Please enter all the fileds before saving a Note!');
   }
   else if(data.title.length < 10 && data.description === ''){
    alert('Please enter the description before saving a Note!');
   }
   else if(notesSnapshot?.docs.find((note) => note.data().title === data.title)){
    alert('Note with same title is already exist please enter a new title');
   }
   else{
   const docRef = await addDoc(collection(db, "notes"), {...data, timestamp: serverTimestamp()});
   clear();
   setSuccess(true);
   setTimeout(() => {
    setSuccess(false);
   }, 3000);
   }
  }

  const clear = () => {
    setData({title: '', description: ''});
  }

  return (
    <div className="input-note">
      {/* {
        !!notesSnapshot?.docs.find((note) => note.data().title === data.title) ? alert('Please enter a different title') : 
      } */}
     <h1>Write a note here!</h1>
      <Paper elevation={12}>
      <TextField style={{ margin: '15px' , width: '90%'}} id="outlined-basic" name="title" label="Title" value={data.title} variant="outlined" onChange={(e) => setData({...data,title: e.target.value})} />
      <TextField style={{ margin: '15px' , width: '90%'}} label="Description" name="description" value={data.description} variant="outlined" onChange={(e) => setData({...data,description: e.target.value})} multiline minRows={3}/>
      <div >
      <Button style={{ margin: '15px'}} variant="contained" onClick={handleSubmit} >Save</Button>
      <Button variant="outlined" onClick={clear} >Clear All</Button>
      { success && <p style={{ position: 'absolute', color: 'green'}}>New note added successfully!</p>}
      </div>
      </Paper>
    </div>
  )
}

export default InputNote
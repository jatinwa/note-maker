import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { Link } from 'react-router-dom';
import moment from 'moment';
import '../../App.css';
import { NatRounded } from '@mui/icons-material';

const Cardd = ({id, index, note}) => {
  
  const handleDelete = async () => {
    await deleteDoc(doc(db, "notes", id));
    console.log('deleted successfully');
  }

  return (
    <>
    <Card style={{ margin: '15px'}} sx={{ maxWidth: 345 }} elevation={12}>
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {`${index}. ${note.title}`}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {note.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small"><Link to={`/notes/${id}`} style={{ textDecoration: 'none' }}>Edit</Link></Button>
      <Button size="small" color="error" onClick={handleDelete}>Delete</Button>
    </CardActions>
    <p className='time'>{note.timestamp ? moment(note.timestamp.toDate()).format('DD-MM-YYYY HH:mm') : '...'}</p>
  </Card>
  </>
  )
}

export default Cardd
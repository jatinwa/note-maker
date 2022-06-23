import React, { useState } from 'react'
import Cardd from'./Cardd';
import '../../App.css';
import { collection } from 'firebase/firestore';
import { db } from '../../firebase';
import { useCollection } from 'react-firebase-hooks/firestore';


const Cards = () => {

  const [notesSnapshot] = useCollection(collection(db, "notes"));

  const showNotes = () => {
    if(notesSnapshot) {
    return notesSnapshot.docs.map((item,index) => (
      <Cardd
      key={item.id}
      id={item.id}
      index={index+1}
      note={item.data()}
      />
    ));
    }
  }
  return (
    <div className="Card-container">

      {
       (showNotes())
      }
    </div>
  )
}

export default Cards
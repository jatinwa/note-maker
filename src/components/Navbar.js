import React from 'react'
import { Paper, Stack } from '@mui/material'
import '../App.css';

import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

const Navbar = () => {
  return (
    <div className='navbar'>
    <Stack direction="row" spacing={2}>
      <Item>Note-Maker</Item>
      <Item ><Link to="/" style={{ textDecoration: 'none', color: 'black' }} >Home</Link></Item>
    </Stack>
  </div>
  )
}

export default Navbar
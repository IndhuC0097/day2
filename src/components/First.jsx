import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const First = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <input placeholder='username' /><br /><br />
      <input type="password" placeholder='password'/><br /><br />
      <button>Login</button>

      <br /><br /><br /><br /><br />
      <Typography variant='h3'> Login Page </Typography>
      <TextField variant='outlined' label='username'/><br />
      <TextField variant='filled' label='name'/><br />
        <TextField variant='standard' label='mail id'/><br />      
        <Button variant='text' color='error'>TEXT</Button>&nbsp;
        <Button variant="contained" color='secondary'>Contained</Button>&nbsp;
        <Button variant="outlined" color='success'>Outlined</Button>
    </div>
  )
}

export default First

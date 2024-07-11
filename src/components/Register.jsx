import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    <div>
      <Typography variant='h3' color='red'>Registration Form</Typography><br/>
      <TextField variant='outlined' label='name' />&nbsp;
      <TextField variant='outlined' label='age'/><br /><br />
      <TextField variant='outlined' label='place'/>&nbsp;
      <TextField variant='outlined' label='department'/><br />
      <TextField variant='standard' label='email'/><br /><br />
      <TextField variant='filled' label='password'/><br/><br />
      <Button variant='contained'>Register</Button>

    </div>
  )
}

export default Register

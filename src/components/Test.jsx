import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Test = () => {

   var [h,setH]=useState("");
          const home = (a)=>{
           console.log("h c");
          setH(a);
          }
         


  return (
    <div>
      <Typography variant='h3'>Welcome To {h}</Typography>
      <Button variant='contained' color='error' onClick={()=>{home("Home")}}>Home</Button>&nbsp;
      <Button variant='contained' color='success' onClick={()=>{home("Gallery")}}>Gallery</Button>&nbsp;
      <Button variant='contained' onClick={()=>{home("Contacts")}}>Contacts</Button>
      
    </div>
  )
}

export default Test


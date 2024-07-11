import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
    var [name,setName]=useState("Indhu");
    var [carname,setcarName]=useState("Amaze");
    var [input,setInput]=useState();
    const changeName = () => {
        console.log("button clicked");
        setName(input);
    };

    const inputHandler =(e) =>{
      console.log(e.target.value)
      setInput(e.target.value)
    }

  return (
    <div style={{textAlign:'center'}}>
      <Typography variant='h3'>
        Hello {name}
        
      </Typography><br />
      <Typography variant='h4'>
        Car {carname}
      </Typography><br /><br />
      <TextField variant='outlined' label="enter your name" onChange={inputHandler}/>
      <br /><br />
        <Button variant='contained' onClick={changeName}>change</Button>
    </div>
  )
}

export default StateBasics

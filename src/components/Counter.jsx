import { Button, Typography } from '@mui/material';
import React, { useState } from 'react'

const Counter = () => {

    var [num,setNum]=useState(0);
    const subtract=()=>{
        setNum(--num)
    }
    const add=()=>{
        setNum(++num)
    }

  return (
    <div style={{textAlign:"center", marginTop:'5%'}}>
        <Typography variant='h3'>
            {
                num
            }
        </Typography><br /><br />
        <Button variant='contained' color='error' onClick={subtract}>-</Button>&nbsp;
        <Button variant='contained' color='success' onClick={add}>+</Button>

      
    </div>
  )
}

export default Counter

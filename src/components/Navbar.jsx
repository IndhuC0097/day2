import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit"><Link to={'/'} style={{textDecoration: "none", color:"white"}}>Login</Link></Button>
          <Button color="inherit"><Link to={'/reg'} style={{textDecoration: "none", color:"white"}}>Register</Link></Button>
          <Button color="inherit"><Link to={'/tab'} style={{textDecoration: "none", color:"white"}}>Table</Link></Button>
          <Button color="inherit"><Link to={'/'} style={{textDecoration: "none", color:"white"}}>Logout</Link></Button>
          <Button color="inherit"><Link to={'/s'} style={{textDecoration: "none", color:"white"}}>state</Link></Button>
          <Button color="inherit"><Link to={'/c'} style={{textDecoration: "none", color:"white"}}>counter</Link></Button>
          <Button color="inherit"><Link to={'/t'} style={{textDecoration: "none", color:"white"}}>test</Link></Button>

          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar

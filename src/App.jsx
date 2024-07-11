import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './components/First'
import Register from './components/Register'
import Tabs from './components/Tabs'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Test from './components/Test'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <First/> */}
      {/* <Register/> */}
      {/* <Tabs/> */}
      <Navbar/>
      <Routes>
        <Route  path='/' element={<First/>}/>
        <Route path='/reg' element={<Register/>}/>
        <Route path='/tab' element={<Tabs/>}/>
        <Route path='/s' element={<StateBasics/>}/>
        <Route path='/c' element={<Counter/>}/>
        <Route path='/t' element={<Test/>}/> 
      </Routes>
    </>
  )
}

export default App

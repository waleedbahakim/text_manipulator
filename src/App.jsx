import React from 'react'
import { Navbar } from './Navbar'
import { InputText } from './InputText'

export const App = () => {
  
  return (
    <>
    <Navbar title1 ='TextManipulator' link ='About Text'/>

    {<div className='container'>
      <InputText/>
    </div> }
    </>
  )
}

export default App

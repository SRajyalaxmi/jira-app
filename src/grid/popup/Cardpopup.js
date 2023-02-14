import React,{useState} from 'react'
import Left from './Left'
import Pheader from './Pheader'
import Right from './Right'
import './Pheader.css'

const Cardpopup = () => {
  
  return (
    <div >
        <Pheader className='pop'/>
        <div className='leftright'>
            <Left  />
            <Right/>
        </div>
    </div>
  )
}

export default Cardpopup
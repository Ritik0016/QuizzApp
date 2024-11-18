import React from 'react'
import Block from './Block'


const P1R = () => {

  return (
      <div  className='w-2/5 h-4/5 flex flex-col justify-evenly items-center'>
        <Block  Optionnumber={0}/>
        <Block  Optionnumber={1}/>
        <Block  Optionnumber={2}/>
        <Block  Optionnumber={3}/>
      </div>
  )
}

export default P1R
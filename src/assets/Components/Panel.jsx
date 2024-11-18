import React from 'react'
import Button from './Button'
const Panel = (props) => {

  const inc = props.fnctI
  const dec = props.fnctD
  const clr = props.fnctC


  return (
    <div className='w-full h-10  absolute bottom-0 flex justify-around'>
       <div id="pleft" className='h-full w-2/4 '></div>
       <div id="pright" className=' h-full w-2/5  flex justify-around items-center'>
        <Button fnct={dec} text={'Prev.'} />
        <Button fnct={clr} text={'Clear'} />
        <Button fnct={inc} text={'Next'} />
       </div>
    </div>
  )
}

export default Panel
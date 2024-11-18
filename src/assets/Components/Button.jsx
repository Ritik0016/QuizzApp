import React from 'react'

const Button = (props) => {

  

  return (
    <>
    <button onClick={props.fnct} className='h-8 w-20 bg-blue-400 rounded-2xl text-white font-bold'>
      {props.text}
    </button>
    </>
  )
}

export default Button
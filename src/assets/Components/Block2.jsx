import React, { useContext } from 'react'
import { Countcontext } from '../Context/Context1'

const Block2 = () => {
  const Counting = useContext(Countcontext)
  return (
    <div className=' text-white rounded w-3/5 h-1/5 flex items-center ml-12 pl-8 text-3xl font-bold'>
      Question {Counting}
    </div>
  )
}

export default Block2
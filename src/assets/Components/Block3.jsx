import React, { useContext } from 'react'
import { Questioncontext,Countcontext } from '../Context/Context1'

const Block3 = () => {
  const Counting = useContext(Countcontext)
  const HelloQues = useContext(Questioncontext)
  return (
    <div className='text-white rounded w-4/5 h-3/5 ml-12 pl-8'>
      {HelloQues[Counting].Question}
      <pre></pre>
      {HelloQues[Counting].Code}
    </div>
  )
}

export default Block3
import React from 'react'

const Result = () => {
  return (
    <div   style={{ 
        height: 'calc(100vh - 48px)'
      }} className='w-full cursor-none bg-blue-200 relative top-12 flex justify-evenly items-center'>
        <div className='cursor-none text-2xl rounded-xl p-10 w-3/5 h-2/5 bg-blue-950  flex justify-evenly items-center text-white font-black '> "Congratulations! You have completed The Quiz. Your results will be provided soon"</div>
    </div>
  )
}

export default Result
import React from 'react'
import './Section2.css'

const Section2 = () => {
  return (
    <div className='text-3xl flex justify-evenly items-center p-1.5 text-white flex-wrap w-full'>
      <div className='w-2/5 m-10'>
        <h1 className='text-2xl'>Workflow</h1>
        <h2 className='text-8xl'>Create at the speed of thought.</h2>
        <p className='text-base my-3'>Focus on your getting your thoughts out and crafting the best message while Chronicle does the heavy lifting for you</p>
      </div>
      <div className='w-2/5 m-10'>
        <div className='box bg-off-black w-full p-10 text-center'>
          <div>
            <h1 className='text-4xl mb-5'>A keyword first experience.</h1>
            <p className='text-2xl'>Powerful shortcuts and a keyboard-first workflow means you will get to your finish line in no time!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
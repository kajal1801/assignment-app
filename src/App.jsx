import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Section1 from './assets/Section1'
import Section2 from './assets/Section2'

function App() {

  return (
    <div>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-white text-5xl text-center mt-5 mx-10'>Choose the section you want to check out</h1>
        <ul className='flex flex-row justify-around w-3/4'>
          <li className='text-center text-2xl mx-6 my-6 px-4 py-4 bg-slate-200 rounded-full hover:rounded-xl hover:ease-in-out hover:scale-110'>
            <Link to="/Section1">Section 1</Link>
          </li>
          <li className='text-center text-2xl mx-6 my-6 px-4 py-4 bg-slate-200 rounded-full hover:rounded-xl hover:ease-in-out hover:scale-110'>
            <Link to="/Section2">Section 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path='/Section1' element={<Section1 />} />
        <Route path='/Section2' element={<Section2 />} />
      </Routes>
    </div>
  )
}

export default App

import React, { useContext, useState } from 'react'
import {useTodoContext} from '../contexts/TodoContext'

const Second = () => {
    console.log("Second")
    const [data,setData]=useState(7);
    const update=()=>{
        setData(prev=>prev/3+100);
    }
  return (
    <div className='w-full h-screen flex flex-col items-center  justify-center  bg-violet-800 '>
       <div>
          <h1 className='text-4xl font-bold'>This is First</h1>
       </div>
       <div className='mt-4 max-w-4/5 flex items-center bg-slate-600 py-2 px-4 rounded-2xl'>
       <button onClick={update} type="button" className="bg-black text-white px-3 py-1 rounded-xl">Alternative</button>
         <p className='mx-4 truncate '>The number is {data}</p>
       </div>
    </div>
  )
}

export default Second

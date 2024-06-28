import React, { useContext, useState } from 'react'
import {useTodoContext} from '../contexts/TodoContext'

const First = () => {
    console.log("First")
    const [data,setData]=useState(2);
    const update=()=>{
        setData(prev=>prev*2-1);
    }
  return (
    <div className='w-full h-screen flex flex-col items-center  justify-center  bg-fuchsia-800 '>
       <div>
          <h1 className='text-4xl font-bold'>This is First</h1>
       </div>
       <div className='mt-4 flex items-center bg-slate-600 py-2 px-4 rounded-2xl'>
       <button onClick={update} type="button" className="bg-black text-white px-3 py-1 rounded-xl">Alternative</button>
         <p className='mx-4 truncate'>The number is {data}</p>
       </div>
    </div>
  )
}

export default First

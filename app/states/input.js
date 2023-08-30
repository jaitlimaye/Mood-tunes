'use client'
import React from 'react'
import { useStateContext } from '../contexts/state_context'
import { useEffect, useState } from 'react'
const Input = () => {
  const [currmood, setCurrmood] = useState('')
  const {setState,setMood} = useStateContext()

  const onChange = (e) => {
    setCurrmood(e.target.value)
  }

  const submit_handler = () => {
    setMood(currmood)
    console.log(currmood)
    setState('recommendations')
  }
  return (
    <div className='flex justify-center h-full w-full items-start p-8'>
      <div className='flex flex-col justify-center items-center h-1/2 w-1/2 rounded-3xl border-2 border-[#964EC2] mt-8'>
      <div className='flex flex-col justify-start items-center h-1/3 w-full whitespace-pre-line text-xl'>
          How are you feeling?
        </div>
        <div className='flex flex-row justify-center items-start h-1/3 w-full'>
          <div className='flex justify-end items-start h-2/3 w-1/2'>
          <input className='flex justify-end items-center w-2/3 h-1/2 text-black rounded-l-3xl p-2 border-2 border-[#964EC2]' type='text' placeholder='Enter your mood here' onChange={onChange}/>
          </div>
          <div className='flex justify-start items-start h-1/2 w-1/3'>
          <button className='flex justify-center items-center h-2/3 w-1/2 rounded-r-3xl border-2 border-[#964EC2]' onClick={submit_handler}>
            Submit
          </button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Input
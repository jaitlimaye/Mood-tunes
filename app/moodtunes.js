'use client'
import React from 'react'
import {Login, Input, Recommendations} from './states'
import { useState,useContext } from 'react'
import { useStateContext } from './contexts/state_context'

const Moodtunes = () => {
    const {state, setState} = useStateContext()
    const states = {'login': <Login />, 'input': <Input />, 'recommendations': <Recommendations />}
    //const [state, setState] = useState('login')
    const State = states[state]

  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
        <div className='flex flex-grow-0 justify-center items-center h-1/6 w-full text-3xl'>
            Moodtunes
        </div>
        <div className='flex flex-row justify-center items-center h-5/6 w-full'>
                {states[state]}
        </div>
         
    </div>
  )
}

export default Moodtunes
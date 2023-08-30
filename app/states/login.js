import React from 'react'
import { useStateContext } from '../contexts/state_context'

const Login = () => {
  const {setState} = useStateContext()

  const login_handler = () => {
    setState('input')
  }

  return (
    <div className='flex justify-center h-full w-full items-start p-8'>
      <div className='flex flex-col justify-center items-center h-1/3 w-1/3 rounded-3xl border-2 border-[#964EC2] mt-8'>
        <div className='flex flex-col justify-start items-center h-1/3 w-full whitespace-pre-line'>
          Login to Spotify to get started!
        </div>
        <div className='flex flex-col justify-start items-center h-1/3 w-full'>
          <button className='flex justify-center items-center h-2/3 w-1/2 rounded-3xl border-2 border-[#964EC2]' onClick={login_handler}>
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
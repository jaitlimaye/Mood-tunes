'use client'

import {createContext, useContext, useEffect, useState} from "react";


const StateContext = createContext(null)

export const StateProvider = ({children}) => {
    const [state, setState] = useState('login')
    const [mood, setMood] = useState('')
    return (
        <StateContext.Provider value={{state, setState,mood, setMood}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
import { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const useDarkMode=()=>{
    const [darkModeOn, setDarkModeOn]=useLocalStorage("on")
    
    const handleChanges= updatedValue =>{
        setDarkModeOn(updatedValue);
    }  
    return [darkModeOn, setDarkModeOn, handleChanges]
};
    
export default useDarkMode
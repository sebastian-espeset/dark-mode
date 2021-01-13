import useLocalStorage from './useLocalStorage'

const useDarkMode=(darkModeKey)=>{
    const [someValue, setSomeValue]=useLocalStorage(darkModeKey);
    return [ someValue, setSomeValue, useLocalStorage ]
}

export default useDarkMode;
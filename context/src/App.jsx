
import { useState, createContext } from 'react'
import './App.css'
import Clock from './components/clock/Clock'

export const LanguageContext = createContext("en")

function App() {

const [language, setLanguage] = useState("en")

function handleSetLenguage (newLanguage){
  setLanguage(newLanguage)
}

  return (
    <div>
      <button onClick={()=> handleSetLenguage("it")}>IT</button>
      <button onClick={()=> handleSetLenguage("en")}>EN</button>
      
    <LanguageContext.Provider value = {{language, setLanguage}}>
    <Clock/>
    </LanguageContext.Provider>
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './Homepage'
import { BrowserRouter } from 'react-router-dom'
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"
import Author from './Author'
import Searchpage from './Searchpage'

function App() {
  const[results,setResults] = useState([])

  return (
    <>
    <BrowserRouter>
       

     <Routes>

       <Route path="/" element={<Homepage setResults={setResults} />}/> 
       <Route path="/author/:user" element={<Author/>}/> 
       <Route path="/search/:name" element={<Searchpage results={results} setResults={setResults}/>}/> 

       

     </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App

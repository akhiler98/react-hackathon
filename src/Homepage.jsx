import { useState } from "react"
import SearchBar from "./SearchBar"
import SearchResults from "./SearchResults"
import './App.css'
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"




function Homepage({setResults}) {
    // const[searchQuery,setSearchQuery] = useState('')
    // const[results,setResults] = useState([])
    
  return (
    <>
    <div className="homepage">Homepage</div>
    

    <SearchBar setResults={setResults}/>

      {/* <Routes>
        <Route path="/search/:name" element={<SearchResults results={results}/>}/>
      </Routes> */}

    {/* <SearchResults results={results}/> */}
    </>
  )
}

export default Homepage
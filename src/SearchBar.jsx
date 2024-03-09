import { useEffect } from 'react'
import key from '../key.js'
import './App.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'



function SearchBar({setResults}) {
    const[searchQuery,setSearchQuery] = useState('')

    const loaddata = async () => {
       
        const response = await fetch(`https://api.unsplash.com/search/photos?query=" + ${searchQuery} + "&client_id=${key.unsplashAccessKey}`)
        const data = await response.json()
        // console.log(data);
        setResults(data.results)
    
}

// useEffect(()=>{
//     loaddata()
// },[])

const handleChange =(e)=>{
    setSearchQuery(e.target.value)
}

const handleClick=()=>{
    loaddata()

}


  return (
    <div className='searchbar'>

        <input className='input' value={searchQuery} type="text" onChange={handleChange} placeholder='search..'/><br />
        <button onClick={handleClick}><Link to={"/search/"+searchQuery }>search</Link></button>
    </div>
  )
}

export default SearchBar
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import key from '../key.js'
import './App.css'

function Author() {
    const[author,setAuthor] = useState('')
    const[results,setResults] = useState('')


    let {user} = useParams()
    console.log(user);


    const loaddata = async () => {
       
        const response = await fetch(`https://api.unsplash.com/users/${user}?client_id=${key.unsplashAccessKey}`)
        const data = await response.json()
        console.log(data);
        setResults(data)
    
}

   
useEffect(() => {
    loaddata();

    },[]);

// const handleChange =(e)=>{
//     setAuthor(e.target.value)
// }

// const handleClick=()=>{
//     loaddata()
// }


  return (
    <>
    <div>search Author</div>
     
    {/* <input value={author} type="text" onChange={handleChange}/>
    <button onClick={handleClick}>search</button> */}

    <div>
        {   results ?

            <>
            <h1 className='heading'>Author details</h1>
     <div className='author-detail'>
        <div className='author-content'>
         <li>FIRST NAME:{results.first_name}</li>
         <li>LAST NAME:{results.last_name}</li>
         <li>BIO:{results.bio}</li>
         <li>location:{results.location}</li>
         <li>downloads:{results.downloads}</li>
         <li>followers:{results.followers_count}</li>
         <li>username:{results.username}</li>
        </div>
        <div className='profile-image'>
        <img src={results.profile_image.large} alt="" />
        </div>
    </div>
        
        <div className='author-images'>
            <img className='img-auth' src={results.photos[0].urls.small} alt="" />
            <img className='img-auth' src={results.photos[1].urls.small} alt="" />
            <img className='img-auth' src={results.photos[2].urls.small} alt="" />
        </div>
        </>
        : "loading"
       }
    </div>
    </>
  )
}

export default Author
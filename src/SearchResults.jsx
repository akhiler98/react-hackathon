import { Link } from 'react-router-dom';
import './App.css'
import { useState } from 'react';
function SearchResults({results}) {
    console.log(results);
    const[width,setWidth] = useState(300)
    const[height,setHeight] = useState(300)
    // const[hover,setHover] = useState('')
   



    const changeSize=(e)=>{
        setWidth(e.target.value)
        setHeight(e.target.value)
        // console.log(width);
    }
    
    let imgStyle = {    

        width: +width,
        height: +height
        
    }


    
  return (
   <>
     <input value={width} type="range" id="" name="image" min="200" max="800" onChange={changeSize}/>
      <label htmlFor="">image-size</label>



   <div className="container">
   {
    results.map(item=>{
        return(
            <>
            <div className="container-image">
              <li>NAME:{item.user.username}</li>
              <img  style={imgStyle}  src={item.urls.small} alt="" />
              <Link to={"/author/"+ item.user.username}>show author details</Link>

            </div>
           
            </>
        )
    })
   }
   </div>
   </>
  )
}

export default SearchResults
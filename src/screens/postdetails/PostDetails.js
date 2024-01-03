import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Fetchapi from '../../hooks/Fetchapi'
import "./PostDetails.css"

function PostDetails() {
    const location=useLocation()
    const navigate=useNavigate()
    const {state:post}=location
const{data,optionsData}=Fetchapi(`https://jsonplaceholder.typicode.com/posts/${post.id}`,"DELETE")

useEffect(()=>{

  
  if(data.length!==0){
  const Timer=setTimeout(()=>navigate("/"),3000)
  return ()=>clearTimeout(Timer)
  }
  
  
    },[data,navigate,post])
    const handle_edit=()=>{
      navigate(`/edit/${post.id}`,{state:post})
    }
    const handle_delete=()=>{
     optionsData()
    }
  return (
    <div className='container outer'>

<div className="jumbotron">
  <h1 className="display-4">{post.title}</h1>
  <p className="lead">{post.body}</p>
  {data.length!==0&&
            <div class="alert alert-success" role="alert">
    Data Deleted successfully
          </div>
            }
 <div className='float-end'>

 <button type="submit" className="btn btn-primary" onClick={handle_edit}>Edit</button>
 </div>
 <div  className='float-end'>
 <button type="submit" className="btn btn-primary" onClick={handle_delete}>Delete</button>
    </div>
</div>




    </div>
  )
}

export default PostDetails
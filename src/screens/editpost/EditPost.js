import React, { useEffect, useState } from 'react'
import "./EditPost.css"
import { useNavigate, useLocation } from 'react-router-dom'
import Fetchapi from '../../hooks/Fetchapi'
function EditPost() {
  const[title,setTitle]=useState("")
  const[content,setContent]=useState("")
  const[validation,setValidation]=useState(null)
  const[modified,setModified]=useState({})
const location=useLocation()

const {state:post}=location
const navigate=useNavigate()
const{data, error, isPending, optionsData }=Fetchapi(`https://jsonplaceholder.typicode.com/posts/${post.id}`,"PUT")
useEffect(()=>{
  setTitle(post.title)
  setContent(post.body)
  
  if(data.length!==0){
  const Timer=setTimeout(()=>navigate("/"),3000)
  return ()=>clearTimeout(Timer)
  }
  
  
    },[data,navigate,post])
  const handle_submit=(e)=>{
    e.preventDefault()
if(title==""){
  setValidation("Title sould not be empty")
}
if(content==""){
  setValidation("Content sould not be empty")
}
optionsData(modified)
  //  optionsData({title,body:content})
  }


const ontitle_change=(e)=>{
  setTitle(e.target.value)
setModified({...modified,title:e.target.value})
}

const oncontent_change=(e)=>{
  setContent(e.target.value)
  setModified({...modified,body:e.target.value})
  }



// console.log("hhh",modified)
  
  return (
    <div className='edit'>
<form className='container form' onSubmit={handle_submit}>
<div className='form-group'>
  <div>
<label>Title</label>
<input className='form-control' onChange={ontitle_change} value={title}/>
</div>

<div>
<label >Content</label>
<textarea className='form-control' onChange={oncontent_change} value={content}/>
</div>
</div>
{validation!==" " && <div class="alert alert-danger" role="alert">
            {validation}

     
          </div>}
          {data.length!==0&&
            <div class="alert alert-success" role="alert">
    Data Edited successfully
          </div>
            }
<div  className='float-end'>
 <button type="submit" className="btn btn-primary">Edit</button>
    </div>
</form>

    </div>
  )
}

export default EditPost
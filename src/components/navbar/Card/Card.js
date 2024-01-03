import React from 'react'
import "../Card/Card.css"
import { useNavigate } from 'react-router-dom'

function Card({post}) {
    const navigate=useNavigate()

    const handle_click=()=>{
        navigate(`post/${post.id}`,{state:post})
    }

  return (
    <div className='container' onClick={handle_click}>
           <div className='full-card'>
    <div className="card">
    <div className="card-header">
      Featured
    </div>
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.body}</p>
   
    </div>
  </div>
  </div>
  </div>
  )
}

export default Card
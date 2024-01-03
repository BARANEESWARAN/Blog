import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Fetchapi from '../../hooks/Fetchapi'
import { ThemeContext, useThemeContext } from '../../hooks/ThemeContext'
import './Createpost.css'
function Createpost() {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [validation, setValidation] = useState("")
  const navigate=useNavigate()
  const { data, error, isPending, optionsData } = Fetchapi("https://jsonplaceholder.typicode.com/posts","POST")
  // const theme =ThemeContext();
  const {theme} = useThemeContext()
  // const {theme} = state


// const state=useContext(ThemeContext)
// const theme=state
// console.log("first",theme)


console.log("Theme",theme)


  const handle_submit = (e) => {
    e.preventDefault()

    if (!title) {
      setValidation("Title should not be empty")
      return
    }
    if (!content) {
      setValidation("content should not be empty")
      return
    }
    setValidation("")
    console.log({ title, body: content })
//  if(title!==""&&content!=="")
 optionsData({ title, body: content })
  }

  useEffect(()=>{
   
    if(data.length!==0){
let Timer=setTimeout(()=>navigate("/"),3000)
return ()=>clearTimeout(Timer)
    }


  },[data])

// console.log(dat)
  return (
    <div className='container outer'>
      <form onSubmit={handle_submit} className="form">
        <div className='form-group  '>
          <label>Title</label>
          <input className='form-control' onChange={(e) => setTitle(e.target.value)} />

          <label>Content</label>
          <textarea className='form-control' onChange={(e) => setContent(e.target.value)} />
        </div>
        <div className='float-end'>
          {validation && <div class="alert alert-danger" role="alert">
            {validation}

     
          </div>}
          {data.length!==0&&
            <div class="alert alert-success" role="alert">
    Data added successfully
          </div>
            }
          <button type="submit" className="btn btn-primary" >Edit</button>
        </div>
      </form>




    </div>
  )
}

export default Createpost;
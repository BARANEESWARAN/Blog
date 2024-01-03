import React from 'react'
import { useThemeContext } from '../../../hooks/ThemeContext'


function Switch() {
    const {theme,dispatch,value}=useThemeContext()
    // const{theme}=state
    console.log(theme,"theme")
    const handle_Toggle=()=>{
      if(theme=="light"){
        dispatch({type:"DARK"})
      }
      else{
        dispatch({type:"LIGHT"})
      }
    }
 
  return (
   <>
   <div className="form-check form-switch" style={{marginLeft:"130px",marginTop:"20px"}}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={handle_Toggle}/>

</div>
   </>
  )
}

export default Switch
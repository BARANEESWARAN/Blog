
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Username } from '../../App'
import { useThemeContext } from '../../hooks/ThemeContext'
import "../navbar/Navbar.css"
function Navbar() {
  // const {name}=useContext(Username)
  // const {username,email}=name;
  const {theme}=useThemeContext()
  return (
<header className={`${theme}header`}>
    <div className='header-l' >
    <Link to="/" >    <h1>Blog</h1></Link>
        </div>
        {/* <div>{username}</div>
        <div>{email}</div> */}
        
      <div className='header-r'>
     <Link to="/" > <span >Home</span></Link> 
     <Link to="createpost" >  <span>create Posts</span></Link> 
        </div>
     

   
</header>
  )
}

export default Navbar
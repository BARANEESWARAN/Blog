import React, { useContext, useEffect, useState } from 'react'
import Card from '../../components/navbar/Card/Card'


import "../home/Home.css"
import Fetchapi from '../../hooks/Fetchapi'
import { Username } from '../../App'
function Home() {
// const {name,setName}=useContext(Username)
// const {username,email}=name

  const { data: post, error, isPending } = Fetchapi("https://jsonplaceholder.typicode.com/posts",)

  return (
    <div className='home-container'>
      <div className='home'>
        {/* <h1>HELLO:{username}</h1>
        <h1>HELLO:{email}</h1> */}
        {/* <input onChange={(e)=>setName({...name,username:e.target.value})} value={username}/> */}

        {
          post && post.map((post, index) => (

            <Card post={post} key={index} />

          )
          )

        }
        {
          error && <h3>{error}</h3>
        }
        {
          isPending && <h2>....Loading</h2>
        }


      </div>
    </div>
  )
}

export default Home
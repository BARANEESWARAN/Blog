import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/home/Home';
import PostDetails from './screens/postdetails/PostDetails';
import Createpost from './screens/createpost/Createpost';
import Navbar from './components/navbar/Navbar';
import EditPost from "./screens/editpost/EditPost"
import UseReducer from './hooks/UseReducer';
import { createContext, useState } from 'react';
import { ThemeContextProvider } from './hooks/Usecontext';
import Switch from './components/navbar/Swich/Switch';
import { useThemeContext } from './hooks/ThemeContext';

export const Username=createContext()

function App() {

const [value,setValue]=useState("React")
const {theme} = useThemeContext()
const[name,setName]=useState({
  username:"barani",
  lastname:"waran",
  email:"barani@gmail.com"
})
console.log("first",theme)
  return (
    <div className={` App ${theme}bg `}>  
   
    <BrowserRouter>

    {/* <Username.Provider value={{name,setName }}> */}
<ThemeContextProvider>
    <Navbar/>
    <Switch/>
    <div className='container body'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="post/:id" element={<PostDetails/>}/>
        <Route path="createpost" element={<Createpost/>}/>
        <Route path="/edit/:id" element={<EditPost/>}/>
        <Route path="reducer" element={<UseReducer/>}/>
         
    
      </Routes>
      </div>
      {/* </Username.Provider> */}
      </ThemeContextProvider>
    </BrowserRouter>
    </div>
   
  );
}

export default App;

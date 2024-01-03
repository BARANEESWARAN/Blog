import React, { useReducer } from 'react'

function UseReducer() {

    const initialvalue={count:0}
    const Initialvalue={
name:"",
age:"",
email:""


    }
const Reducer=(state,action)=>{
    switch(action.type){
    case "increment":
           return {count:state.count+1};

    case "decrement":
        return {count:state.count-1};
    case "replacevalue":
         return {count:action.payload};
    
        }

    }
const FormReducer=(state,action)=>{
    switch(action.type){

    case "name":
        return {...state,name:action.payload};
  
    case "age":
        return {...state,age:action.payload};
 
    case "email":
        return {...state,email:action.payload};
    }
}
  



    const[state,dispatch]=useReducer(Reducer,initialvalue)
    const[form,Dispatch]=useReducer(FormReducer,Initialvalue)
    console.log("first",Initialvalue)
  return (
    <>
   <div>
    <h1>COunt : {state.count}</h1>
    <button onClick={()=>dispatch({type:"increment"})} >Increment</button>
    <button onClick={()=>dispatch({type:"decrement"})} >decrement</button>
    <button onClick={()=>dispatch({type:"replacevalue",payload:7})} >replacevalue</button>
   </div>
   <br></br><br></br>
   <div>
<span>NAme: {form.name}</span>
<span>age: {form.age}</span>
<span>email: {form.email}</span>
<br></br><br></br>
<input placeholder='name' onChange={(e)=>Dispatch({type:"name",payload:e.target.value})} ></input>
<input placeholder='age' onChange={(e)=>Dispatch({type:"age",payload:e.target.value})} ></input>
    <input placeholder='email' onChange={(e)=>Dispatch({type:"email",payload:e.target.value})} ></input>
   </div>

   </>
  )
}

export default UseReducer
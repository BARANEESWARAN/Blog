// import React, { useEffect,useState } from 'react'



// function Fetchapi(url,method="GET") {
//     const[data,setData]=useState([])
//     const[error,setError]=useState(null)
//     const[option,setOption]=useState(null)
//     const[isPending,setIsPending]=useState(true)

// const optionsData=(value)=>{

//     if(method==="POST"){

//         setOption({
// method:"POST",
// body:JSON.stringify(value),
// headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },

//         });
//     }
//    else if(method==="PUT"){

//         setOption({
//             method:"PUT",
// body:JSON.stringify(value),
// headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },

//         });
//     }

//     else if(method==="DELETE" ){

//         setOption({
// method:"DELETE"


//         });
//     }





// }

// const optionsData = (data) => {
//     if (method === "POST") {
//       setOptions({
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       });
//     } else if (method === "PATCH") {
//       setOptions({
//         method: "PATCH",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       });
//     } else if (method === "DELETE") {
//       setOptions({
//         method: "DELETE"
//       });
//     }
//   };

    





//     useEffect(()=>{
//         const fetchPosts = async (options) => {
        
//             // let response=await axios.get(url)
//             const response = await fetch(url,{options})
          
//             const jsonresponse= response.json()
          
        
//             if(response.ok){
//                 setData(jsonresponse)
//                 setError("")
//                 setIsPending(false)
//             }
        
//             if(!response.ok){
//                setIsPending(false)
//                setError(jsonresponse.err) 
            
//             }
        
        
//         }
//         if (method === "GET") {
//             fetchPosts();
//           } else if ((method === "POST" || method === "PATCH" || method === "DELETE") && option) {
//             fetchPosts(option);
//           }
       
        
        
//         },[url,method,option])





//   return{data,error,isPending,optionsData}
 
  
// }

// export default Fetchapi

import { useState, useEffect } from "react";

const useFetch = (url, method = "GET") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [options, setOptions] = useState(null);

//   const optionsData = (data) => {
//     if (method === "POST") {
//       setOptions({
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       });
//     } else if (method === "PATCH") {
//       setOptions({
//         method: "PATCH",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-type": "application/json; charset=UTF-8",
//         },
//       });
//     } else if (method === "DELETE") {
//       setOptions({
//         method: "DELETE"
//       });
//     }
//   };
const optionsData=(data)=>{

    if(method=="POST"){
        setOptions({
            method:"POST",
            body:JSON.stringify(data),
            headers:{
                       "Content-type": "application/json; charset=UTF-8",
                       },
            
        })
    }


   else if(method=="PUT"){
        setOptions({
            method:"PUT",
            body:JSON.stringify(data),
            headers: {
                       "Content-type": "application/json; charset=UTF-8",
                       },
            
        })
    }
    else if(method=="DELETE"){
        setOptions({
            method:"DELETE",
         
            
        })
    }

}
  useEffect(() => {
    const fetchPosts = async (options) => {
      setIsPending(true);
      const response = await fetch(url, { ...options });

      const jsonResponse = await response.json();



    if(response.ok){
        setData(jsonResponse)
        setError("")
        setIsPending(false)
        
        }
        if(!response.ok){
           
            setError(jsonResponse.error)
            setIsPending(false)
            
            }
        }
    if(method === "GET"){
        fetchPosts()
    }
    else if((method==="POST" || method==="PUT" || method==="DELETE") && options ){
        fetchPosts(options)
    
    }
    if (method === "GET") {
      fetchPosts();
    } else if ((method === "POST" || method === "PATCH" || method === "DELETE") && options) {
      fetchPosts(options);
    }


//     const fetchPosts = async (options) => {

//         const response = await fetch(url,{...options});
 
//         const jsonResponse = await response.json();
 
//  if(response.ok){
//  setData(response)
//  setError("")
//  setIsPending(false)
 
//  }
//  if(!response.ok){
    
//      setError(jsonResponse.error)
//      setIsPending(false)
     
//      }
//  }
 
//  if(method === "GET"){
//      fetchPosts()
//  }
//  else if((method==="POST" || method==="PUT" || method==="DELETE") && options ){
//      fetchPosts(options)
 
//  }










  }, [url, method, options]);

  return { data, error, isPending, optionsData };
};
export default useFetch
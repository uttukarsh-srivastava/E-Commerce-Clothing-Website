// import React, { useEffect } from 'react'
// import { useState } from 'react'
// export default function UseEffectComponent() {
//     const[data,setData]=useState(0)
//     useEffect(()=>{
//         const fetchData=async()=>{
//             const data=await fetch("https://jsonplaceholder.typicode.com/todos")
//             const result=data.json()
//             console.log(result)
//         }
//         fetchData()
//     })
//   return (
//     <div><h1>Use Effect Component</h1>
//     <h3>{data}</h3>
//     <button onClick={()=>setData(data+1)}>Increase Me</button></div>
//   )
// }

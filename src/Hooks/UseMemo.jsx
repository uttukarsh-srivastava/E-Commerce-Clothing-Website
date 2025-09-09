// import React, { useMemo, useState } from 'react'

// const UseMemo = () => {
//     const[inputValue,setInputValue]=useState("")
//     const calculateResult=(input)=>{
//         console.log("calculateResult")
//         return input.length
//     }
//     const memoizationResult=useMemo(()=>calculateResult(inputValue),[inputValue])
//   return (
//     <div>
//         <input type='text' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
//         <h3>Input Value is:{inputValue}</h3>
//         <h3>Input Memoization:{memoizationResult}</h3>
//     </div>
//   )
// }

// export default UseMemo
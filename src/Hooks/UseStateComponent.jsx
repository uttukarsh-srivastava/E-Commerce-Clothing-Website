// import React, { useState } from 'react'
// import { Row } from 'react-bootstrap';

// export default function useStateComponent() {
//     const[count,setCount]=useState(0)
//     // const increaseMe=()=>{
//     //     setCount(count+1)
//     //}
//   return (
//     <div>
//         <h1>{count}</h1>
//         <button onClick={()=>setCount(count+1)}>Click Me</button>
//     </div>
//   )
// }


// export default function ChangeContent() {
//     // const[status,setStatus]=useState(false)
//     const[pstatus,psetStatus]=useState(false)
//   return (
//     <div>
//       Enter you password:<input type={pstatus?'text':'password'}/>
//     <button onClick={()=>psetStatus(!pstatus)}>{pstatus?'Hide':'Show'}</button>
//     </div>
//   )
// }

// export default function ChangeContent() {
//   const [isDark, setIsDark] = useState(false);
//   const handleClick = () => {
//     setIsDark(!isDark);
//   }
//   return (
//     <div style={{ 
//       backgroundColor: isDark ? 'black' : 'white',

//       }}>
//       <h4>The background is currently {isDark ? 'Dark' : 'Light'}</h4>
//       <button onClick={()=>handleClick(!isDark)}>{isDark?'Light':'Dark'}
//       </button>
//     </div>
//   );
// }
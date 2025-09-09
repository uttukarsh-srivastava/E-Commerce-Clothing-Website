// import React,{useReducer} from 'react'

// export default function UseReducerComponent() {
//     const reducer=(state,action)=>{
//         switch(action.type){
//             case 'INCREAMENT':
//                 return {
//                     ...state,
//                     count:state.count+1,
//                 message:'Increment done'}
//             case 'DECREAMENT':
//                 return {...state,
//                     count:state.count-1,
//                 message:'Decrement done'}
//             default:
//                 return state
//         }
//     }
//     const[state,dispatcher]=useReducer(reducer,{count:0,count1:0,message:""})
//   return (
//     <div>
//         <h1>Welcome to UseReducer Component</h1>
//         <h2>{state.count}</h2>
//         <button onClick={()=>{dispatcher({type:'INCREAMENT'})}}>INCREAMENT</button>
//         <button onClick={()=>{dispatcher({type:'DECREAMENT'})}}>DECREAMENT</button>
//     </div>
//   )
// }

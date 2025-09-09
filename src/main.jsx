// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'



// createRoot(document.getElementById('root')).render(
//     <App />
// )



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShopContextProvider from './Context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <ShopContextProvider>
  <App />
  </ShopContextProvider>
  
  // </StrictMode>,
)



// import Weather from './App.jsx'; // Adjust path as needed

// function App() {
//   return (
//     <div>
//       <Weather />
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import UseEffectComponent from "./Hooks/UseEffectComponent";
// import UseRefComponent from "./Hooks/UseRefComponent";
// import { Routes, Route, Link } from "react-router-dom";
// import Home from './Pages/Home'
// import Contact from './Pages/Contact'
// import About from './Pages/About'
// import ErrorComponent from "./ErrorComponent";
// import UseMemo from "./Hooks/UseMemo";
// import UseReducerComponent from "./Hooks/UseReducerComponent";
// import UseStateComponent from "./Hooks/useStateComponent";
// import './App.css'
// import Header from './Header'
// import Footer from './Footer'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Cards from './Cards'
// import Login from './login'; 
// import ChangeContent from './ChangeContent';
// import { MyComponent1 } from './MyComponent1';
// import MyComponent from './MyComponent';
// import {MyComponent1}  from './MyComponent1';
// import Welcome from './Welcome';

// function App() {
//   return (
    // <>
    // <UseMemo/>
    {/* <ErrorComponent/> */}
  {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
  <Routes>
    <Route path ='/' element={<Home/>}></Route>
    <Route path ='/Contact' element={<Contact/>}></Route>
    <Route path ='/About' element={<About/>}></Route>
  </Routes> */}
  
    {/* <UseStateComponent/> */}
    {/* <UseReducerComponent/> */}
    {/* <UseEffectComponent/> */}
    {/* <UseRefComponent/> */}
    {/* <Header/>
     <Container fluid>  
       <Row>
        <Col className='col-12 text-center'>
        <h1>Our Games</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <Cards/>
        </Col>
        </Row>
        <Row>
        <Col>
        <Cards/>
        </Col>
        </Row>
        <Row>
        <Col>
        <Cards/>
        </Col>
      </Row> 
      <Row>
        <Col>
        <Cards/>
        </Col>
        </Row>
        <Row>
        <Col>
        <Cards/>
        </Col>
        </Row>
        <Row>
        <Col>
        <Cards/>
        </Col>
      </Row> 
    </Container> 

    <Footer/> */}
// </>
//   )
// }

// export default App;






import Navbar from "./Components/Navbar/Navbar"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Shop from "./Pages/Shop"
import ShopCategory from "./Pages/ShopCategory"
import Product from "./Pages/Product"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"
import Footer from "./Components/Footer/Footer"
import men_banner from "./assets/banner.jpg"
import women_banner from "./assets/women_banner.avif"
import kids_banner from "./assets/kids_banner.jpg"
function App() {
 
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory banner={men_banner} category="men"/> }/>
        <Route path="/womens" element={<ShopCategory banner={women_banner}category="women"/>}/>
        <Route path="/kids" element={<ShopCategory banner={kids_banner}category="kid"/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/product/:productId" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
     
  )
}

export default App



// Stopwatch:
// import React, { useState, useEffect } from 'react';

// const Stopwatch = () => {
//   const [time, setTime] = useState(0);         // elapsed time in seconds
//   const [isRunning, setIsRunning] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);

//   useEffect(() => {
//     let interval = null;

//     if (isRunning && !isPaused) {
//       interval = setInterval(() => {
//         setTime(prev => prev + 1);
//       }, 1000);
//     }

//     return () => clearInterval(interval); // cleanup
//   }, [isRunning, isPaused]);

//   const handleStart = () => {
//     setTime(0);
//     setIsRunning(true);
//     setIsPaused(false);
//   };

//   const handleStop = () => {
//     setIsRunning(false);
//     setIsPaused(false);
//     setTime(0);
//   };

//   const handlePause = () => {
//     setIsPaused(true);
//   };

//   const handleResume = () => {
//     setIsPaused(false);
//   };

//   return (
//     <div style={styles.container}>
//       <h2>Stopwatch</h2>
//       <h1>{time} s</h1>
//       <div style={styles.buttons}>
//         <button onClick={handleStart} style={styles.button}>Start</button>
//         <button onClick={handleStop} style={styles.button}>Stop</button>
//         <button onClick={handlePause} style={styles.button} disabled={!isRunning || isPaused}>Pause</button>
//         <button onClick={handleResume} style={styles.button} disabled={!isPaused}>Resume</button>
//       </div>
//     </div>
//   );
// };

// // Optional: Simple styling object
// const styles = {
//   container: {
//     textAlign: 'center',
//     marginTop: '50px',
//     fontFamily: 'Arial',
//   },
//   buttons: {
//     display: 'flex',
//     justifyContent: 'center',
//     gap: '10px',
//     marginTop: '20px',
//   },
//   button: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     cursor: 'pointer',
//   }
// };

// export default Stopwatch;



// Weather:
// import React, { useState, useEffect } from 'react';

// const Weather = () => {
//   const [city, setCity] = useState('Delhi');
//   const [inputCity, setInputCity] = useState('');
//   const [weatherData, setWeatherData] = useState(null);
//   const [error, setError] = useState('');

//   const API_KEY = 'https://api.weatherbit.io/v2.0/current?lat=35.7721&lon=-78.63861&key=XXX&units=I'; 

//   useEffect(() => {
//     const controller = new AbortController(); // For cleanup

//     const fetchWeather = async () => {
//       try {
//         const response = await fetch(
//           `https://api.weatherbit.io/v2.0/current?city=${city}&key=${API_KEY}`,
//           { signal: controller.signal }
//         );
//         if (!response.ok) throw new Error('Weather data fetch failed');
//         const data = await response.json();
//         setWeatherData(data.data[0]);
//         setError('');
//       } catch (err) {
//         if (err.name !== 'AbortError') {
//           setError('Could not fetch weather data');
//         }
//       }
//     };

//     fetchWeather();

//     // Cleanup function
//     return () => {
//       controller.abort();
//     };
//   }, [city]); // Refetch when city changes

//   const handleFetch = () => {
//     if (inputCity.trim() !== '') {
//       setCity(inputCity.trim());
//     }
//   };

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial', maxWidth: '400px', margin: 'auto' }}>
//       <h2>Weather Dashboard</h2>

//       <input
//         type="text"
//         placeholder="Enter city"
//         value={inputCity}
//         onChange={(e) => setInputCity(e.target.value)}
//         style={{ padding: '8px', width: '70%' }}
//       />
//       <button onClick={handleFetch} style={{ padding: '8px 10px', marginLeft: '10px' }}>
//         Get Weather
//       </button>

//       {error && <p style={{ color: 'red' }}>{error}</p>}

//       {weatherData && (
//         <div style={{ marginTop: '20px', padding: '15px', border: '1px solid #ccc', borderRadius: '10px' }}>
//           <h3>{weatherData.city_name}, {weatherData.country_code}</h3>
//           <p><strong>Temperature:</strong> {weatherData.temp}°C</p>
//           <p><strong>Weather:</strong> {weatherData.weather.description}</p>
//           <p><strong>Humidity:</strong> {weatherData.rh}%</p>
//           <p><strong>Wind Speed:</strong> {weatherData.wind_spd} m/s</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Weather;

// import React, { useState } from 'react';

// const ErrorComponent = () => {
//   const [user, setUser] = useState([]); // Changed from null to empty array
//   const [error, setError] = useState(""); // Initialized as empty string

//   const fetchData = async () => {
//     try {
//       const response = await fetch("https://jsonplaceholder.typicode.com/users");
//       if (!response.ok) {
//         throw new Error("Failed to fetch users");
//       }
//       const data = await response.json();
//       setUser(data);
//       setError(""); // Clear previous error
//     } catch (err) {
//       setError(err.message);
//       setUser([]); // Clear users if fetch fails
//     }
//   };

//   return (
//     <>
//       <div>ErrorComponent</div>
//       <button onClick={fetchData}>Fetch Data</button>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {user && (
//         <ul>
//           {user.map((u) => (
//             <li key={u.id}>{u.name}</li>

//           ))}
//         </ul>
//       )}
//     </>
//   );
// };

// export default ErrorComponent;

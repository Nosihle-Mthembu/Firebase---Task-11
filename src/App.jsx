// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Home from "./components/About";
// import Contact from "./components/Contacts";
// import NoPage from "./components/NoPage";
// import Accommodations from "./components/Accomodation";
// import SignIn from "./components/SignIn";
// import SignUp from "./components/SignUp";
// import React, { useEffect, useState } from "react";
// import cong from "../firebase-backend/configuration"; // Assuming the correct path to your configuration file
// import { getDatabase, ref, onValue } from "firebase/database";

// export default function App() {

//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Initialize the Firebase database with the provided configuration
//     const database = getDatabase(cong);
    
//     // Reference to the specific collection in the database
//     const collectionRef = ref(database, "your_collection");

//     // Function to fetch data from the database
//     const fetchData = () => {
//       // Listen for changes in the collection
//       onValue(collectionRef, (snapshot) => {
//         const dataItem = snapshot.val();

//         // Check if dataItem exists
//         if (dataItem) {
//           // Convert the object values into an array
//           const displayItem = Object.values(dataItem);
//           setData(displayItem);
//         }
//       });
//     };

//     // Fetch data when the component mounts
//     fetchData();
//   }, []);

//   return (
//     <>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="Accommodation" element={<Accommodations />} />
//           <Route path="Sign-In" element={<SignIn />} />
//           <Route path="Sign-Up" element={<SignUp />} />
//           <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
    
//     <div>
//       <h1>Data from database:</h1>
//       <ul>
//         {data.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
    
//     </>
//   );
// }


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/About";
import Contact from "./components/Contacts";
import NoPage from "./components/NoPage";
import Accommodations from "./components/Accomodation";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="accommodations" element={<Accommodations />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



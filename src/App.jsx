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
          <Route path="Accommodation" element={<Accommodations />} />
          <Route path="Sign-In" element={<SignIn />} />
          <Route path="Sign-Up" element={<SignUp />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}




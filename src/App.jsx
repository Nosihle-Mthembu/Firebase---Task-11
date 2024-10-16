import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/About";
import Contact from "./components/Contacts";
import NoPage from "./components/NoPage";
import Accommodations from "./components/Accomodation";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Admin from "./components/AdminProfile";
import User from "./components/UserProfile";

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
          <Route path="adminProfile" element={<Admin />} />
          <Route path="userProfile" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/About";
import Contact from "./components/Contacts";
import NoPage from "./components/NoPage";
import Accommodations from "./components/Accomodation";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AdminPage from "./components/AdminProfile";
import User from "./components/UserProfile";
import AddHotelForm from "./components/hotelAddition";
import AccommodationView from "./components/accomodationView";
import UpdateHotelForm from './components/UpdateHotelForm';


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
          <Route path="adminProfile" element={<AdminPage />} />
          <Route path="userProfile" element={<User />} />
          <Route path="/Form" element={<AddHotelForm />} />
          <Route path="accommodationView" element={<AccommodationView />} />
          <Route path="/update-hotel/:hotelId" element={<UpdateHotelForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}



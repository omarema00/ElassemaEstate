import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Users/Home";
import Login from "./pages//Register & login/Login";
import Register from "./pages/Register & login/Register";
import ProductDetail from "./pages/Users/ProductsDetails";
import NavbarUser from "./components/Navbar/NavbarUser";
import NavbarAdmin from "./components/Navbar/NavbarAdmin";
import ContactUs from "./pages/Users/ContactUs";
import ContactMessages from "./pages/Admin/ContactMessages";
import AdminHome from "./pages/Admin/AdminHome";
import UnitsPage from "./pages/Admin/UnitsPage"; // new file for adding units
import NewCapital from "./pages/Users/CapitalDetail";
import AvailableUnits from "./pages/Users/AvailableUnits";
import Footer from "./components/Footer";
import AboutUs from "./pages/Users/AboutUs";
function Layout({ user, setUser, children }) {
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {isDashboard ? (
        <NavbarAdmin setUser={setUser} />
      ) : (
        <NavbarUser user={user} setUser={setUser} />
      )}
      {children}
      <Footer/>
    </>
  );
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <Router>
      <Layout user={user} setUser={setUser}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/new-capital" element={<NewCapital />} />
          <Route path="/availableUnits" element={<AvailableUnits />} />
          <Route path="/About-us" element={<AboutUs/>} />

          <Route
            path="/dashboard/messages"
            element={
              user?.role === "admin" ? (
                <ContactMessages />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
  path="/dashboard"
  element={user?.role === "admin" ? <AdminHome /> : <Navigate to="/login" />}
/>
<Route
  path="/dashboard/units"
  element={user?.role === "admin" ? <UnitsPage /> : <Navigate to="/login" />}
/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from "./assets/component/Navbar";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from "react-router-dom";
import Contacts from "./assets/component/Contact/Contacts";
import About from "./assets/component/About/About";
import Home from "./assets/component/Home/Home";
import Footer from './assets/component/footer.jsx';
import Page404 from './assets/Error/Page404/Page404.jsx';
import "./App.css";
import Login from "./assets/component/Auth/login";
import SignUp from "./assets/component/Auth/register";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./assets/component/Auth/profile";
import { auth } from "./assets/component/Auth/firebase";
import OnlineTest from "./assets/component/Test/OnlineTest";
import ProctoringDashboard from "./assets/component/Test/ProctoringDashboard";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <AppContent user={user} />
    </Router>
  );
}

function AppContent({ user }) {
  const location = useLocation();

  // Routes where Navbar should be hidden
  const hideNavbarRoutes = ["/login", "/register", "/profile"];

  // Routes where Footer should be hidden
  const hideFooterRoutes = ["/login", "/register", "/profile", "/online-test", "/proctoring-dashboard"];

  return (
    <>
      {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}

      <br />
      <br />

      <Routes>
        <Route path="/" element={user ? <Navigate to="/profile" /> : <Login />} />
        <Route path="/login" element={user ? <Navigate to="/profile" /> : <Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/online-test" element={user ? <OnlineTest /> : <Navigate to="/login" />} />
        <Route path="/proctoring-dashboard" element={user ? <ProctoringDashboard /> : <Navigate to="/login" />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="*" element={<Page404 />} />
      </Routes>

      <ToastContainer />

      <br />
      <br />

      {!hideFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
}

export default App;

import "./App.css";
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Teams from "./pages/Teams";
import Analytics from "./pages/Analytics";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5yA5Kn1TAQubvYW5MwG_T-g0XMAzORf4",
  authDomain: "teams-app-d4a97.firebaseapp.com",
  projectId: "teams-app-d4a97",
  storageBucket: "teams-app-d4a97.appspot.com",
  messagingSenderId: "121957100683",
  appId: "1:121957100683:web:262502501de0000acf388e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  return (
    <Router>
      <Navbar />
      <SideBar>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Teams />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Mission from './Components/Mission';
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import SignOut from "./Components/SignOut";
import Land from './Components/Land';
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path='/about' element ={<About/>}></Route>
        <Route path='/mission' element ={<Mission/>}></Route>
        <Route path="/login" element={<Land />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/" element={
            <Home />
        } />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/user/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/user/Signup";
import Gallery from "./components/gallery/Gallery";

function App() {
  const [formType, setFormType] = useState("login"); 

  const handleFormSwitch = (type) => {
    setFormType(type);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
        {formType === "login" ? (
          <Route index path="/" element={<Login onFormSwitch={handleFormSwitch} />} />
          
      ) : (
      
      
          <Route path="/signup" element={<Signup onFormSwitch={handleFormSwitch} />} />
          )}
          <Route path="/index" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

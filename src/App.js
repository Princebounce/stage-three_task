import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/user/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/user/Signup";
import Gallery from "./components/gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/index" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

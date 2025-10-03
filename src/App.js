import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./landing page/Navbar";
import Signup from "./landing page/Signup/Signup";
import Dashboard from "./dashboard/Dashboard";
import About from "./landing page/About/About";
import Product from "./landing page/Product/Product";
import Home from "./landing page/Home/Home";
import Pricing from "./landing page/Pricing/Pricing";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  );
}

export default App;
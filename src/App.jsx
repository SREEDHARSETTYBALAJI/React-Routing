import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Navbar from "./components/Navbar"
import { Route, Routes } from "react-router-dom"
export default function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/about" element={<About />} ></Route>
    </Routes>
    </div>
  );
}
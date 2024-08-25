import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Frontbattle" element={<Home/>}></Route>
        {/* <Route path="/" element={}></Route>
        <Route path="/" element={}></Route>
        <Route path="/" element={}></Route>
        <Route path="/" element={}></Route>
        <Route path="/" element={}></Route> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

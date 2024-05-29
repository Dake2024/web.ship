import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Parcels from "./pages/Parcels";
import Address from "./pages/Address";
import Calculator from "./pages/Calculator";


function App() {
  return (
      <div>
        
        <BrowserRouter>
        <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/parcels" element={<Parcels/>}/>
              <Route path="/address" element={<Address/>}/>
              <Route path="/calculator" element={<Calculator/>}/>

        </Routes>
  
    </BrowserRouter>
      </div>
  );
}
  export default App;
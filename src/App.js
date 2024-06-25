import React from 'react'
import { Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import { Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Cart from "./pages/Cart.js";

const App = () => {
  return (
    <div >
   <div>
    <Navbar/>
   </div>
   <Routes>
    <Route path="/" element={<Home></Home>}   />
    <Route path="/carrtpage" element={<Cart></Cart>}   />
   </Routes>
      
    </div>
  )
}

export default App


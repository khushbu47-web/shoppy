import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Linkhome from "./components/Linkhome";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CarouselContainer from "./components/CarouselContainer";
import Mobile from "./multipage/Mobile";
import Cloth from "./multipage/Cloth";
import Electronics from "./multipage/Electronic";

import Cosmetic from "./multipage/Cosmetic";
import Appliance from "./multipage/Appliance";
import { BrowserRouter, Routes, Route, Link, useSearchParams } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Linkhome />
        <Routes>
          <Route path="/" element={<CarouselContainer />} />
          <Route path="mobiles" element={<Mobile />} />
          <Route path="cloths" element={< Cloth/>} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="appliances" element={<Appliance />} />
          <Route path="cosmetics" element={<Cosmetic />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;

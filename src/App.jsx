import React from "react";
import Navbar from "./Components/Navbar";
import AnimatedBackground from "./Components/Backgroud";
import Contact from "./Pages/Contact";
import Asosiy from "./Pages/Asosiy";
import Haqida from "./Pages/Haqida";
import Portfolio from "./Pages/Portfolio";


function App() {
  return (
    <div>
      <AnimatedBackground />
      <div className="relative">
        <Navbar />
        <div className="pt-20">
          <Asosiy />
          {/* <Haqida /> */}
          {/* <Portfolio /> */}
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;

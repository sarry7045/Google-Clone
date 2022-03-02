import "./Global.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Routes from "./Components/Routes";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <>
      <div className={darkTheme ? "dark" : ""}>
        <div className="bg-gray-500 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
          <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Footer />
          <Routes />
        </div>
      </div>
    </>
  );
}

export default App;

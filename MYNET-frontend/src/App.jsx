import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignIn from "./pages/log/SignIn.jsx";
import Home from "./pages/log/Home.jsx";
import Path from "./routes/Path";

function App() {

  return (
    <div className=" cus-bg" >
      <Path/>
    </div>
  );
}

export default App;

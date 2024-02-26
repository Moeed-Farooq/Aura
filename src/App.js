import "./App.css";
import React, { useState } from "react";
import SmallScreenMsg from "./components/smallscreen/SmallScreenMsg";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
// import Login from './components/login/Login';
// import { Route, Routes } from 'react-router-dom';

function App() {
  // const [isAuth, setIsAuth] = useState(false);
  // const handleLogin = () => {
  //   setIsAuth(true);
  // };
  return (
    <>
      <div className="AllContent">
        {/* {isAuth ? <Dashboard /> : <Login handleLogin={handleLogin} />} */}
        <Dashboard />
      </div>

      <div className="ShortScreenMsg">
        <SmallScreenMsg />
      </div>
    </>
  );
}

export default App;

import './App.css';
import React from 'react';
import SmallScreenMsg from './components/smallscreen/SmallScreenMsg';
import Dashboard from './components/dashboard/Dashboard';
// import Login from './components/login/Login';
// import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='AllContent'>
        <Dashboard/>
      </div>

      <div className='ShortScreenMsg'>
        <SmallScreenMsg />
      </div>
    </>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import NavBarVapor from './components/navbar/NavBarVapor';
import Resume from './components/resume/sections/Resume';

function App() {
  let buttonName: string = "Test"
  
  return (
    <div className={'app'} >
      <NavBarVapor />
      <Resume />
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  let buttonName: string = "Test"
  
  return (
    <>
      <Button 
        variant="primary"
        onClick={()=> alert('Test')}>{buttonName}
      </Button>
    </>
  );
}

export default App;

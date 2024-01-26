import './App.css';
import './components/TC'
import Card from './components/Card';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
    }
  }

  return (
    <>
      <Router>
        <Navbar title="MyApp" item1="Home" item2="Contact" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route path="/contact" element={<Card mode={mode} toggleMode={toggleMode} />} />
          <Route path="/" element={<TextForm heading="Enter Text Here" mode={mode} toggleMode={toggleMode} />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
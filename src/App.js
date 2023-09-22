import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Loader from './Components/Loader'; 

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    setTimeout(() => {
      setIsLoading(false); 
    }, 2000); 
  }, []);

  return (
    <>
      <BrowserRouter>
        {isLoading ? (
          <Loader /> 
        ) : (
          <Routes>
            <Route exact path='/' element={<Home />} />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
};

export default App;

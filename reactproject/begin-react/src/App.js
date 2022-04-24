import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/Cards';
import Pagination from './components/Pagination';

function App() {  

  return (
    
    <div className='App'>
      <Card />
      <Pagination />
    </div>
  );
};

export default App;
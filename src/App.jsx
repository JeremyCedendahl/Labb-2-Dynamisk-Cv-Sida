import React from 'react';
import './App.css';
import Header from './Header';
import Data from './Data';
import Portfolio from './portfolio';

export const App = () => {
  return (
    <>
      <Header/>
      <Portfolio/>
      <Data/>
    </>
  );
}

export default App;

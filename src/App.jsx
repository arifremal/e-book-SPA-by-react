import React from 'react';
import Home from './Component/Home';
import About from './Component/About';
import { Outlet } from 'react-router-dom';
import Header from './Component/Header';

const App = () => {
  return (
    <div> 
      {/* header */}
     <Header></Header>
  <Outlet/>
  {/* footer */}

    </div>
  );
};

export default App;
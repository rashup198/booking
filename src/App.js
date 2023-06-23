import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Error from './Error';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';

function App() {
  return (
    <div className="App">
   
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/hotels"element={<List></List>}></Route>
        <Route path="/hotels/:id" element={<Hotel></Hotel>} />
        <Route path="*" element={<Error></Error>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

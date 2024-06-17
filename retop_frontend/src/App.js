import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lokasi from './pages/Lokasi';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Daftar from './pages/Daftar';
import Blog from './pages/Blog';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/Lokasi" element={<Lokasi />} />
      <Route path="/" element={<Landing/>} />
      <Route path="/Login" element={<Login />} />
      <Route Path="/Daftar" element={<Daftar />} />
      <Route path="/Blog" element={<Blog />} />
    </Routes>
  </Router>
  );
}

export default App;

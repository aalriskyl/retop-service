import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lokasi from './pages/Lokasi';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Daftar from './pages/Daftar';
import BlogList from './pages/BlogList';
import AdminPage from './pages/AdminPage';
import AddBlog from './pages/addBlog';
import AddLocation from './pages/addLocation';
import BlogDetail from './pages/BlogDetail';


function App() {
  return (
    <Router>
    <Routes>
    <Route path="/blogs/:id" element={<BlogDetail />} />
      <Route path="/Lokasi" element={<Lokasi />} />
      <Route path="/" element={<Landing/>} />
      <Route path="/Login" element={<Login />} />
      <Route Path="/Daftar" element={<Daftar />} />
      <Route path="/Blog" element={<BlogList />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/addblog" element={<AddBlog />} />
      <Route path="/addlocation" element={<AddLocation />} />
    </Routes>
  </Router>
  );
}

export default App;

// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/HomePage';
import Anime from './pages/Anime';
import Manga from './pages/Manga'; 

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/manga" element={<Manga />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import BookmarkPage from './pages/BookmarkPage';
import KomikDetail from './pages/KomikDetail';
import Anime from './pages/Anime';
import Manga from './pages/Manga'; 
import LatestPage from './pages/LatestPage'; 
import AnimeDetailPage from './pages/AnimeDetailPage'; // Import the new page
import BottomNavbar from './components/BottomNavbar';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/anime" element={<Anime />} />
          <Route path="/anime/:end" element={<AnimeDetailPage />} /> {/* New route */}
          <Route path="/komik/:end" element={<KomikDetail />} />
          <Route path="/manga" element={<Manga />} />          
          <Route path="/bookmarks" element={<BookmarkPage />} />
          <Route path="/latest/:page" element={<LatestPage />} />
        </Routes>
        <BottomNavbar />
      </Layout>
    </Router>
  );
};

export default App;

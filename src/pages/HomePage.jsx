import React, { useEffect, useState } from 'react';
import axios from 'axios';
import KomikList from './components/KomikList'; // Impor Komponen KomikList

const HomePage = () => {
  const [animeData, setAnimeData] = useState([]);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await axios.get('https://cihuyy-api.vercel.app/api/anime/latest');
        if (response.data.status) {
          setAnimeData(response.data.data.results);
        }
      } catch (error) {
        console.error("Error fetching the anime data", error);
      }
    };

    fetchAnimeData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Latest Anime</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {animeData.map((anime, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <img src={anime.gambar} alt={anime.judul} className="rounded mb-2" />
            <h2 className="text-xl font-semibold">{anime.judul}</h2>
            <p className="text-gray-400">Episode {anime.episode}</p>
            <p className="text-gray-500">{anime.jenis}</p>
            <a
              href={anime.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Now
            </a>
          </div>
        ))}
      </div>

      {/* Gunakan Komponen KomikList */}
      <KomikList />
    </div>
  );
};

export default HomePage;

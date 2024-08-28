// src/pages/AnimeDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AnimeDetail = () => {
  const { end } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await fetch(`https://cihuyy-api.vercel.app/api/anime/anime/${end}`);
        const data = await response.json();
        if (data.status) {
          setAnime(data.data);
        } else {
          console.error("Anime not found");
        }
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    };

    fetchAnimeData();
  }, [end]);

  if (!anime) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={anime.title} />
      <meta property="og:description" content={anime.sinopsis} />
      <meta property="og:image" content={anime.images} />
      <meta property="og:type" content="video.movie" />
      <meta property="og:url" content={`https://your-website.com/anime/${end}`} />

      <h1 className="text-4xl font-bold mb-4">{anime.title}</h1>

      <div className="flex gap-6">
        <img src={anime.images} alt={anime.title} className="w-48 h-auto rounded-lg shadow-md" />
        <div>
          <p className="mb-2"><strong>Rating:</strong> {anime.rating}</p>
          <p className="mb-2"><strong>Status:</strong> {anime.info.Status}</p>
          <p className="mb-2"><strong>Studio:</strong> <a href={anime.info.Studio_link} className="text-blue-500">{anime.info.Studio}</a></p>
          <p className="mb-2"><strong>Rilis:</strong> {anime.info["Telah rilis"]}</p>
          <p className="mb-2"><strong>Durasi:</strong> {anime.info.Durasi}</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">Sinopsis</h2>
      <p>{anime.sinopsis}</p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Episode List</h2>
      <ul>
        {anime.eplister.map((episode, index) => (
          <li key={index} className="mb-2">
            <a href={episode.link} className="text-blue-500">{episode.title}</a> - {episode.date}
          </li>
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Recommendations</h2>
      <div className="grid grid-cols-2 gap-4">
        {anime.recommendations.map((rec, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={rec.img} alt={rec.title} className="w-32 h-auto rounded-lg shadow-md" />
            <a href={rec.link} className="text-blue-500 mt-2">{rec.title}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimeDetail;

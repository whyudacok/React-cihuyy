import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const AnimeDetail = () => {
  const { end } = useParams();
  const [animeData, setAnimeData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://cihuyy-api.vercel.app/api/anime/anime/${end}`);
        if (response.data.status) {
          setAnimeData(response.data.data);
        } else {
          // If status is false, reload the API automatically until true
          fetchData();
        }
      } catch (error) {
        console.error('Error fetching anime data:', error);
      }
    };

    fetchData();
  }, [end]);

  if (!animeData) return <div>Loading...</div>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <meta property="og:title" content={animeData.title} />
      <meta property="og:description" content={animeData.sinopsis} />
      <meta property="og:image" content={animeData.images} />

      <h1 className="text-3xl font-bold mb-4">{animeData.title}</h1>
      <img src={animeData.images} alt={animeData.title} className="w-60 h-auto mb-4" />
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Info</h2>
        <ul>
          {Object.entries(animeData.info).map(([key, value]) => (
            <li key={key} className="flex justify-between">
              <span className="font-semibold">{key}:</span> 
              <a href={key.includes('link') ? value : '#'} className="text-blue-500">{value}</a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Genre</h2>
        <div className="flex flex-wrap gap-2">
          {animeData.genre.map((item, index) => (
            <a key={index} href={item.link} className="text-sm bg-gray-200 rounded-full px-3 py-1">
              {item.name}
            </a>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Sinopsis</h2>
        <p>{animeData.sinopsis}</p>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Episode List</h2>
        <ul>
          {animeData.eplister.map((episode, index) => (
            <li key={index}>
              <a href={episode.link} className="text-blue-500">{episode.title} - {episode.date}</a>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Recommendations</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {animeData.recommendations.map((rec, index) => (
            <a key={index} href={rec.link} className="block">
              <img src={rec.img} alt={rec.title} className="w-36 h-auto mx-auto" />
              <p className="text-center mt-2">{rec.title}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AnimeDetailPage = () => {
  const { end } = useParams();
  const [animeData, setAnimeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://cihuyy-api.vercel.app/api/anime/anime/${end}`);
        const result = await response.json();
        if (result.status) {
          setAnimeData(result.data);
        } else {
          // Handle status false by retrying, or showing an error
          setTimeout(fetchData, 2000);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [end]);

  if (loading) return <div>Loading...</div>;

  if (!animeData) return <div>Error loading data...</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row">
        <img src={animeData.images} alt={animeData.title} className="w-64 h-auto mb-4 lg:mb-0 lg:mr-8" />
        <div>
          <h1 className="text-3xl font-bold mb-4">{animeData.title}</h1>
          <p className="mb-4"><strong>Rating:</strong> {animeData.rating}</p>
          <p className="mb-4"><strong>Status:</strong> {animeData.info.Status}</p>
          <p className="mb-4"><strong>Studio:</strong> <a href={animeData.info.Studio_link} className="text-blue-500">{animeData.info.Studio}</a></p>
          <p className="mb-4"><strong>Rilis di:</strong> {animeData.info['Rilis di']}</p>
          <p className="mb-4"><strong>Sinopsis:</strong> {animeData.sinopsis}</p>

          <h2 className="text-2xl font-semibold mb-4">Episodes</h2>
          <ul>
            {animeData.eplister.map((episode) => (
              <li key={episode.epnum} className="mb-2">
                <a href={episode.link} className="text-blue-500">{episode.title}</a>
                <p className="text-gray-600 text-sm">{episode.date}</p>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Genres</h2>
          <div className="flex flex-wrap">
            {animeData.genre.map((g) => (
              <a key={g.name} href={g.link} className="mr-2 mb-2 bg-blue-500 text-white py-1 px-3 rounded">
                {g.name}
              </a>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Recommendations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {animeData.recommendations.map((rec) => (
              <a key={rec.title} href={rec.link} className="block bg-gray-800 text-white p-2 rounded">
                <img src={rec.img} alt={rec.title} className="w-full h-auto mb-2" />
                <p className="text-sm">{rec.title}</p>
                <p className="text-gray-400 text-xs">{rec.type} - {rec.epx}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetailPage;

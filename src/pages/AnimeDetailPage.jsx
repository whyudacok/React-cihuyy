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

  const {
    title,
    images,
    info,
    genre,
    sinopsis,
    eplister,
    lastEpisode,
    recommendations
  } = animeData;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={sinopsis} />
      <meta property="og:image" content={images} />

      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <img src={images} alt={title} className="w-full h-auto rounded shadow-lg mb-4" />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Information</h2>
        <ul className="list-disc list-inside pl-4 space-y-2">
          <li><strong>Status:</strong> {info.Status}</li>
          <li><strong>Studio:</strong> <a href={info.Studio_link} className="text-blue-500 hover:underline">{info.Studio}</a></li>
          <li><strong>Release Date:</strong> {info['Telah rilis']}</li>
          <li><strong>Duration:</strong> {info.Durasi}</li>
          <li><strong>Series:</strong> <a href={info.Serial_link} className="text-blue-500 hover:underline">{info.Serial}</a></li>
          <li><strong>Type:</strong> {info.Jenis}</li>
          <li><strong>Broadcast By:</strong> {info['Ditayangkan oleh']}</li>
          <li><strong>Released On:</strong> {info['Rilis di']}</li>
          <li><strong>Updated On:</strong> {info['Diupdate di']}</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Genres</h2>
        <ul className="list-disc list-inside pl-4 space-y-2">
          {genre.map((g) => (
            <li key={g.link}>
              <a href={g.link} className="text-blue-500 hover:underline">{g.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Synopsis</h2>
        <p>{sinopsis}</p>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Episodes</h2>
        <ul className="list-disc list-inside pl-4 space-y-2">
          {eplister.map((ep) => (
            <li key={ep.link}>
              <a href={ep.link} className="text-blue-500 hover:underline">{ep.title} - {ep.date}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Last Episode</h2>
        <a href={lastEpisode.link} className="text-blue-500 hover:underline">{lastEpisode.title}</a>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Recommendations</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recommendations.map((rec) => (
            <div key={rec.link} className="border rounded-lg p-4 bg-white shadow">
              <a href={rec.link}>
                <img src={rec.img} alt={rec.title} className="w-full h-48 object-cover rounded mb-2" />
                <h3 className="text-lg font-semibold">{rec.title}</h3>
                <p className="text-sm text-gray-500">{rec.type}</p>
                <p className="text-sm text-gray-500">{rec.epx}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimeDetail;

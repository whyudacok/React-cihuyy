import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KomikList = () => {
  const [komikData, setKomikData] = useState([]);

  useEffect(() => {
    const fetchKomikData = async () => {
      try {
        const response = await axios.get('https://cihuyy-api.vercel.app/api/komik/cari/waka%20chan/1');
        if (response.data.status) {
          setKomikData(response.data.data.results);
        }
      } catch (error) {
        console.error("Error fetching the komi data", error);
      }
    };

    fetchKomikData();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mt-8 mb-4">Search Results for "Wakaba-chan"</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {komikData.map((komik, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <img src={komik.gambar} alt={komik.title} className="rounded mb-2" />
            <h2 className="text-xl font-semibold">{komik.title}</h2>
            <p className="text-gray-400">Type: {komik.type}</p>
            <p className="text-gray-500">Rating: {komik.rating}</p>
            <a
              href={komik.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KomikList;
              

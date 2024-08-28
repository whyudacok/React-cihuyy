import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const LatestPage = () => {
  const { page } = useParams(); // Mengambil parameter halaman dari URL
  const [komikData, setKomikData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true); // Untuk mengelola status loading
  const [error, setError] = useState(false); // Untuk mengelola status error

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://cihuyy-api.vercel.app/api/komik/latest/${page}`);
        if (response.data.status) {
          setKomikData(response.data.data.latestkomik);
          setTotalPages(response.data.data.Totalpages);
          setError(false); // Data berhasil diambil, set error ke false
        } else {
          // Jika status false, coba ambil data lagi
          setError(true); // Set error ke true
          setTimeout(fetchData, 5000); // Coba lagi setelah 5 detik
        }
      } catch (error) {
        console.error('Error fetching the data', error);
        setError(true); // Jika terjadi kesalahan, set error ke true
        setTimeout(fetchData, 5000); // Coba lagi setelah 5 detik
      } finally {
        setLoading(false); // Data berhasil atau gagal, set loading ke false
      }
    };

    fetchData();
  }, [page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Failed to load data. Retrying...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Latest Komik - Page {page}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {komikData.map((komik, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg">
            <img src={komik.gambar} alt={komik.Title} className="rounded mb-2" />
            <h2 className="text-xl font-semibold">{komik.Title}</h2>
            <p className="text-gray-500">{komik.type}</p>
            <a
              href={komik.chapter.link}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {komik.chapter.Title}
            </a>
            <p className="text-gray-400">{komik.chapter.Date}</p>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p>Total Pages: {totalPages}</p>
      </div>
    </div>
  );
};

export default LatestPage;

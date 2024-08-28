import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const LatestPage = () => {
  const { page } = useParams();
  const navigate = useNavigate();
  const [komikData, setKomikData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://cihuyy-api.vercel.app/api/komik/latest/${page}`);
        if (response.data.status) {
          setKomikData(response.data.data.latestkomik);
          setTotalPages(response.data.data.Totalpages);
          setError(false);
        } else {
          setError(true);
          setTimeout(fetchData, 5000);
        }
      } catch (error) {
        console.error('Error fetching the data', error);
        setError(true);
        setTimeout(fetchData, 5000);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      navigate(`/latest/${newPage}`);
    }
  };

  const createPagination = () => {
    const currentPage = parseInt(page, 10);
    const pages = [];
    const pageRange = 2; // Number of pages before and after the current page

    let startPage = Math.max(1, currentPage - pageRange);
    let endPage = Math.min(totalPages, currentPage + pageRange);

    if (currentPage - pageRange < 1) {
      endPage = Math.min(totalPages, endPage + (pageRange - (currentPage - 1)));
    }

    if (currentPage + pageRange > totalPages) {
      startPage = Math.max(1, startPage - (pageRange - (totalPages - currentPage)));
    }

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) pages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }

    return pages.map((pageNum, index) => (
      <button
        key={index}
        onClick={() => handlePageChange(pageNum)}
        className={`px-3 py-1 mx-1 rounded ${pageNum === parseInt(page, 10) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
      >
        {pageNum}
      </button>
    ));
  };

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
      <div className="mt-4 flex justify-center">
        {createPagination()}
      </div>
    </div>
  );
};

export default LatestPage;

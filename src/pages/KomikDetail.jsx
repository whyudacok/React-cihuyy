import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

const KomikDetail = () => {
  const { end } = useParams();
  const [komik, setKomik] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const fetchKomikData = async () => {
      try {
        const response = await axios.get(`https://cihuyy-api.vercel.app/api/komik/manga/${end}`);
        if (response.data.status) {
          setKomik(response.data);
          checkIfBookmarked(response.data.judul.trim());
        }
      } catch (error) {
        console.error("Error fetching komik data:", error);
      }
    };

    fetchKomikData();
  }, [end]);

  const checkIfBookmarked = (title) => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setIsBookmarked(bookmarks.some(bookmark => bookmark.title === title));
  };

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    const title = komik.judul.trim();

    if (isBookmarked) {
      // Remove from bookmarks
      const updatedBookmarks = bookmarks.filter(bookmark => bookmark.title !== title);
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
    } else {
      // Add to bookmarks
      bookmarks.push({ title, thumbnail: komik.thumbnail });
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }

    setIsBookmarked(!isBookmarked);
  };

  if (!komik) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Helmet>
        <title>{komik.judul.trim()}</title>
        <meta property="og:title" content={komik.judul.trim()} />
        <meta property="og:description" content={komik.sinopsis.trim()} />
        <meta property="og:image" content={komik.thumbnail} />
        <meta property="og:url" content={`https://yourdomain.com/komik/${end}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="YourSiteName" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-4">{komik.judul.trim()}</h1>
      <button
        onClick={toggleBookmark}
        className={`p-2 rounded ${isBookmarked ? 'bg-red-500 text-white' : 'bg-gray-500 text-white'} mb-4`}
      >
        {isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
      </button>
      <div className="flex mb-4">
        <img src={komik.thumbnail} alt={komik.judul} className="w-48 h-auto rounded-lg shadow-lg" />
        <div className="ml-4 flex-grow">
          <p className="text-lg font-semibold">Rating: {komik.rating}</p>
          <p className="text-lg mb-2">Chapter Pertama: <a href={komik.chapterPertama.link} className="text-blue-600 hover:underline">{komik.chapterPertama.teks.trim()}</a></p>
          <p className="text-lg mb-2">Chapter Terakhir: <a href={komik.chapterTerakhir.link} className="text-blue-600 hover:underline">{komik.chapterTerakhir.teks.trim()}</a></p>
          <p className="text-lg mb-2">Sinopsis: {komik.sinopsis.trim()}</p>
          <p className="text-lg mb-2">Informasi Tambahan: {komik.informasiTambahan.Manga.trim()}</p>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Informasi</h2>
        <p className="text-lg mb-1"><strong>Judul Alternatif:</strong> {komik.informasi['Judul Alternatif']}</p>
        <p className="text-lg mb-1"><strong>Status:</strong> {komik.informasi['Status']}</p>
        <p className="text-lg mb-1"><strong>Jenis Komik:</strong> {komik.informasi['Jenis Komik']}</p>
        <p className="text-lg mb-1"><strong>Author:</strong> {komik.informasi['Author']}</p>
        <p className="text-lg mb-1"><strong>Artis:</strong> {komik.informasi['Artis']}</p>
        <p className="text-lg mb-1"><strong>Rilis:</strong> {komik.informasi['Rilis']}</p>
        <p className="text-lg mb-1"><strong>Serialisasi:</strong> {komik.informasi['Serialisasi']}</p>
        <p className="text-lg mb-1"><strong>Jumlah Pembaca:</strong> {komik.informasi['Jumlah Pembaca']}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Genre</h2>
        {komik.genre.map((genre) => (
          <a key={genre.link} href={genre.link} className="text-blue-600 hover:underline mr-2">{genre.judul}</a>
        ))}
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Manga Terkait</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {komik.mangaTerkait.map((manga) => (
            <div key={manga.link} className="border rounded-lg p-2">
              <img src={manga.gambar} alt={manga.judul} className="w-full h-auto rounded-lg mb-2" />
              <a href={manga.link} className="text-blue-600 hover:underline block">{manga.judul}</a>
              <p>{manga.info}</p>
              <p>{manga.kutipan}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Chapters</h2>
        {komik.chapters.map((chapter) => (
          <div key={chapter.link} className="border-b py-2">
            <p className="text-lg"><strong>{chapter.judul.trim()}</strong> - {chapter.tanggal}</p>
            <a href={chapter.link} className="text-blue-600 hover:underline">Read Chapter</a>
            {chapter.linkUnduh && <a href={chapter.linkUnduh} className="text-blue-600 hover:underline ml-4">Download</a>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KomikDetail;

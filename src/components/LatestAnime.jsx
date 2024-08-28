// src/components/LatestAnime.js
import React, { useEffect, useState } from 'react';

function LatestAnime() {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data dari API
    fetch('https://cihuyy-api.vercel.app/api/anime/latest')
      .then(response => response.json())
      .then(data => {
        if (data.status) {
          setAnimeList(data.data.results);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
<div className="scroll-smooth flex flex-col mx-auto my-1 md:my-0">
  <div className="flex items-center gap-2 px-3 xl:px-0">
    <span className="w-[0.35rem] h-6 md:w-[0.3rem] rounded-md bg-white" />
    <h1 className="text-[19px] sm:text-[22px] my-4 font-medium md:font-semibold">
      Anime update
    </h1>
  </div>
  <div className="relative">
    <span className="flex items-center mb-5 cursor-pointer absolute left-0 bg-gradient-to-r from-black z-10 transition-all duration-300 invisible opacity-0 h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-4"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    </span>
    <span className="flex items-center mb-5 cursor-pointer absolute right-0 bg-gradient-to-l from-black z-10 transition-all duration-300 lg:px-3 visible h-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-4"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </span>
    <div
      className="relative flex flex-nowrap overflow-scroll overflow-y-hidden gap-3 scrollbar-hide pl-[0.75rem] xl:pl-0"
      id="Popular This Season"
      style={{ cursor: "auto" }}
    >
   {animeList.map((anime, index) => (
  <a
    key={index}  // Tambahkan key di sini
    href={anime.link}  // Gunakan {} di sini
    style={{ cursor: "pointer" }}
  >
    <div className="relative flex flex-col h-full hover:cursor-pointer group w-[105px] sm:w-[135px] md:w-[155px] xl:w-[175px]">
      <div className="flex-shrink-0 absolute top-0 right-0 flex font-medium items-center justify-center gap-[.4rem] bg-black/60 backdrop-blur text-white !text-xs line-clamp-1 z-[7] px-2 py-1 rounded-bl-lg tracking-wider">
        <span className="hidden md:flex">Episode</span>
        <span className="md:hidden">Ep</span>
        <span className="font-medium text-purple-400">{anime.episode}</span>
      </div>
      <div className="relative h-[160px] w-[105px] sm:w-[135px] sm:h-[190px] md:h-[230px] md:w-[155px] xl:h-[255px] xl:w-[175px] rounded-xl xl:rounded-2xl">
        <div className="w-full h-full rounded-xl xl:rounded-2xl overflow-hidden bg-[#1e1e24] aspect-[15/9] flex-shrink-0 shadow-[4px_0px_5px_0px_rgba(0,0,0,0.3)] group">
          <img
            alt={anime.judul}  // Gunakan {} di sini
            loading="eager"
            width={155}
            height={230}
            decoding="async"
            data-nimg={1}
            className="w-full h-full object-cover rounded-xl xl:rounded-2xl transition-transform duration-300 group-hover:scale-105"
            style={{ color: "transparent" }}
            src={anime.gambar}  // Gunakan {} di sini
          />
        </div>
        <div className="w-full h-full rounded absolute group-hover:bg-gradient-to-t from-black/85 to-transparent opacity-0 group-hover:opacity-100 top-0 z-[5] transition-all duration-300 ease justify-center">
          <div className="bottom-4 left-0 right-0 absolute text-xs font-medium flex flex-wrap items-center justify-center gap-[.3rem] z-[7]">
            <span className="uppercase">{anime.jenis}</span>
            <span className="text-[10px]">•</span>
            <span className="font-semibold text-green-400">Kamis</span>
            <span className="">{anime.episode}</span>
          </div>
        </div>
      </div>
      <span className="overflow-hidden text-center text-[#d1d7e0] pt-1.5 px-1.5 sm:px-2 text-xs sm:text-sm font-medium line-clamp-2">
        <span className="aspect-square w-2 h-2 inline-block mr-1 rounded-full bg-green-500 xl:hidden" />
        {anime.judul}
      </span>
    </div>
  </a>
))}
    </div>
  </div>
</div>

  );
}

export default LatestAnime;

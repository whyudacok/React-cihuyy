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
    <div className="relative">
      {/* Kontrol Scroll */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        onClick={() => {
          document.getElementById('scroll-container').scrollBy({
            left: -200,
            behavior: 'smooth',
          });
        }}
      >
        &#8592; {/* Panah kiri */}
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10"
        onClick={() => {
          document.getElementById('scroll-container').scrollBy({
            left: 200,
            behavior: 'smooth',
          });
        }}
      >
        &#8594; {/* Panah kanan */}
      </button>

      <div className="flex flex-col mx-auto my-1 md:my-0">
        <div className="flex items-center gap-2 px-3 xl:px-0">
          <span className="w-[0.35rem] h-6 md:w-[0.3rem] rounded-md bg-white" />
          <h1 className="text-[19px] sm:text-[22px] my-4 font-medium md:font-semibold">
            Anime update
          </h1>
        </div>
        <div
          id="scroll-container"
          className="flex overflow-x-auto overflow-y-hidden gap-3 scrollbar-hide pl-[0.75rem] xl:pl-0"
        >
          {animeList.map((anime, index) => (
            <a
              key={index}
              href={anime.link}
              style={{ cursor: 'pointer' }}
              className="relative flex flex-col h-full group w-[105px] sm:w-[135px] md:w-[155px] xl:w-[175px]"
            >
              <div className="flex-shrink-0 absolute top-0 right-0 flex font-medium items-center justify-center gap-[.4rem] bg-black/60 backdrop-blur text-white !text-xs line-clamp-1 z-[7] px-2 py-1 rounded-bl-lg tracking-wider">
                <span className="hidden md:flex">Episode</span>
                <span className="md:hidden">Ep</span>
                <span className="font-medium text-purple-400">{anime.episode}</span>
              </div>
              <div className="relative h-[160px] w-[105px] sm:w-[135px] sm:h-[190px] md:h-[230px] md:w-[155px] xl:h-[255px] xl:w-[175px] rounded-xl xl:rounded-2xl">
                <div className="w-full h-full rounded-xl xl:rounded-2xl overflow-hidden bg-[#1e1e24] aspect-[15/9] flex-shrink-0 shadow-[4px_0px_5px_0px_rgba(0,0,0,0.3)] group">
                  <img
                    alt={anime.judul}
                    loading="eager"
                    width={155}
                    height={230}
                    decoding="async"
                    data-nimg={1}
                    className="w-full h-full object-cover rounded-xl xl:rounded-2xl transition-transform duration-300 group-hover:scale-105"
                    src={anime.gambar}
                  />
                </div>
                <div className="w-full h-full rounded absolute group-hover:bg-gradient-to-t from-black/85 to-transparent opacity-0 group-hover:opacity-100 top-0 z-[5] transition-all duration-300 ease justify-center">
                  <div className="bottom-4 left-0 right-0 absolute text-xs font-medium flex flex-wrap items-center justify-center gap-[.3rem] z-[7]">
                    <span className="uppercase">{anime.jenis}</span>
                    <span className="text-[10px]">•</span>
                    <span className="font-semibold text-green-400">Kamis</span>
                    <span>{anime.episode}</span>
                  </div>
                </div>
              </div>
              <span className="overflow-hidden text-center text-[#d1d7e0] pt-1.5 px-1.5 sm:px-2 text-xs sm:text-sm font-medium line-clamp-2">
                <span className="aspect-square w-2 h-2 inline-block mr-1 rounded-full bg-green-500 xl:hidden" />
                {anime.judul}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LatestAnime;

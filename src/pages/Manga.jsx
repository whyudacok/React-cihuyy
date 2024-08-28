import React from 'react';
import LatestAnime from './components/LatestAnime'; // Import komponen

function Manga() {
  return (
<div className="flex flex-row transition-all duration-300 ease-in-out">
  <div className="w-screen max-w-full overflow-hidden lg:pl-16">
    <div className="relative flex items-center justify-center flex-col">
      <div className="absolute h-[101%] w-full bg-gradient-to-r from-black from-0% to-transparent to-50%" />
      <div className="absolute h-[101%] w-full bg-gradient-to-l from-black/60 from-0% to-transparent to-60%" />
      <div className="absolute h-[101%] w-full bg-gradient-to-t from-black from-0% to-transparent to-50%" />
      <div className="absolute h-[101%] w-full bg-gradient-to-b from-transparent from-0% to-[#05010e] to-100%" />
      <span className="h-[50vh] sm:h-[70vh] md:h-[100vh]">
        <img
          alt="[Oshi no Ko] 2nd Season"
          fetchpriority="high"
          loading="eager"
          width={200}
          height={200}
          decoding="async"
          data-nimg={1}
          className="w-full h-full object-cover overflow-hidden"
          src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/166531-vUu7iDwUkC67.jpg"
          style={{ color: "transparent" }}
        />
      </span>
      <div className="absolute w-[90%] flex flex-col gap-0.5 md:w-[80%] lg:w-[65%] xl:w-[55%] bottom-[15%] md:bottom-[150px] lg:left-[2.5%] md:left-[40px] sm:left-[30px] left-[3%]">
        <h3 className="text-[0.9rem] sm:text-[1.3rem] font-semibold text-[#ed2672] my-1">
          #3 Trending
        </h3>
        <h1 className="text-[1.3rem] font-semibold sm:text-[2.2rem] md:text-[2.7rem] text-ellipsis line-clamp-2">
          [Oshi no Ko] 2nd Season
        </h1>
        <div className="flex sm:gap-4 sm:text-[0.95rem] sm:my-2 text-[0.8rem] gap-3 mt-1 mb-2 sm:mt-2 font-medium">
          <span className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-1"
              viewBox="0 0 48 48"
            >
              <defs>
                <mask id="ipSPlay0">
                  <g fill="none" strokeLinejoin="round" strokeWidth={4}>
                    <path
                      fill="#fff"
                      stroke="#fff"
                      d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                    />
                    <path
                      fill="#000"
                      stroke="#000"
                      d="M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z"
                    />
                  </g>
                </mask>
              </defs>
              <path
                fill="currentColor"
                d="M0 0h48v48H0z"
                mask="url(#ipSPlay0)"
              />
            </svg>
            TV
          </span>
          <span className="text-[#2fc867]">RELEASING</span>
          <span className="flex items-center">
            <svg
              className="w-5 h-5 mr-1 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Z"
              />
            </svg>
            Aug 3, 2024
          </span>
          <span className="flex items-center">
            <svg
              viewBox="0 0 32 32"
              className="w-5 h-5 mr-1"
              fill="none"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.6661 6.66699C4.29791 6.66699 3.99943 6.96547 3.99943 7.33366V24.667C3.99943 25.0352 4.29791 25.3337 4.6661 25.3337H27.3328C27.701 25.3337 27.9994 25.0352 27.9994 24.667V7.33366C27.9994 6.96547 27.701 6.66699 27.3328 6.66699H4.6661ZM8.66667 21.3333C8.29848 21.3333 8 21.0349 8 20.6667V11.3333C8 10.9651 8.29848 10.6667 8.66667 10.6667H14C14.3682 10.6667 14.6667 10.9651 14.6667 11.3333V12.6667C14.6667 13.0349 14.3682 13.3333 14 13.3333H10.8C10.7264 13.3333 10.6667 13.393 10.6667 13.4667V18.5333C10.6667 18.607 10.7264 18.6667 10.8 18.6667H14C14.3682 18.6667 14.6667 18.9651 14.6667 19.3333V20.6667C14.6667 21.0349 14.3682 21.3333 14 21.3333H8.66667ZM18 21.3333C17.6318 21.3333 17.3333 21.0349 17.3333 20.6667V11.3333C17.3333 10.9651 17.6318 10.6667 18 10.6667H23.3333C23.7015 10.6667 24 10.9651 24 11.3333V12.6667C24 13.0349 23.7015 13.3333 23.3333 13.3333H20.1333C20.0597 13.3333 20 13.393 20 13.4667V18.5333C20 18.607 20.0597 18.6667 20.1333 18.6667H23.3333C23.7015 18.6667 24 18.9651 24 19.3333V20.6667C24 21.0349 23.7015 21.3333 23.3333 21.3333H18Z"
                fill="currentColor"
              />
            </svg>
            8
          </span>
        </div>
        <div className="hidden sm:!block">
          <p className="line-clamp-2 md:line-clamp-3 text-ellipsis text-[#d6d6d6] mb-5">
            The second season of [Oshi no Ko]. Aqua’s desire for revenge takes
            center stage as he navigates the dark underbelly of the
            entertainment world alongside his twin sister, Ruby. While Ruby
            follows in their slain mother’s footsteps to become an idol, Aqua
            joins a famous theater troupe in hopes of uncovering clues to the
            identity of his father — the man who arranged their mother’s
            untimely death, and the man who once starred in the same troupe Aqua
            hopes to infiltrate. (Source: HIDIVE)
          </p>
        </div>
        <div className="w-fit">
          <a href="/anime/info/166531">
            <button className="px-4 py-2 bg-[#4d148c] rounded-full text-sm font-medium flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 mr-1"
                viewBox="0 0 48 48"
              >
                <defs>
                  <mask id="ipSPlay0">
                    <g fill="none" strokeLinejoin="round" strokeWidth={4}>
                      <path
                        fill="#fff"
                        stroke="#fff"
                        d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                      />
                      <path
                        fill="#000"
                        stroke="#000"
                        d="M20 24v-6.928l6 3.464L32 24l-6 3.464l-6 3.464z"
                      />
                    </g>
                  </mask>
                </defs>
                <path
                  fill="currentColor"
                  d="M0 0h48v48H0z"
                  mask="url(#ipSPlay0)"
                />
              </svg>
              Play Now
            </button>
          </a>
        </div>
      </div>
    </div>
    <div className="flex flex-col mb-5 md:mb-4">
      <div className="flex items-center gap-2 px-3 xl:px-0">
        <span className="w-[0.35rem] h-6 md:w-[0.3rem] md:h-8 rounded-md bg-white" />
        <h1 className="text-[19px] sm:text-[21px] my-4 font-semibold xl:text-2xl">
          Continue Watching
        </h1>
      </div>
      <div className="relative">
        <span className="flex items-center cursor-pointer absolute left-0 bg-gradient-to-r from-black z-10 transition-all duration-300 invisible opacity-0 h-full">
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
            className=""
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </span>
        <span className="flex items-center cursor-pointer absolute right-0 bg-gradient-to-l from-black z-10 transition-all duration-300 lg:px-3 visible h-full xl:invisible md:invisible invisible">
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
            className=""
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </span>
        <div
          className="flex items-center flex-nowrap scrollbar-hide overflow-x-auto gap-4 pl-3 xl:pl-0"
          id="continue"
          style={{ cursor: "auto" }}
        >
          <div
            className="flex flex-col gap-2 shrink-0 cursor-pointer relative group/item"
            style={{ cursor: "auto" }}
          >
            <button
              className="aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased absolute bg-white py-1 rounded-md flex flex-col gap-1 z-10 right-1 top-1 md:top-2 md:right-2 transition-all duration-200 ease-out md:opacity-0 group-hover/item:opacity-100 scale-90 group-hover/item:scale-100 group-hover/item:visible visible opacity-100 md:invisible shadow-md shadow-black/50 outline-none border-none"
              data-slot="trigger"
              aria-expanded="false"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </button>
            <a
              className="relative overflow-hidden w-60 sm:w-64 md:w-80 aspect-video group rounded-xl xl:rounded-2xl"
              href="/anime/watch?id=171457&host=kuro&ep=1&type=sub"
            >
              <div className="overflow-hidden w-full aspect-video rounded-xl xl:rounded-2xl">
                <img
                  alt="Make Heroine ga Oosugiru!"
                  loading="lazy"
                  width={155}
                  height={230}
                  decoding="async"
                  data-nimg={1}
                  className="w-full aspect-video object-cover rounded-xl xl:rounded-2xl group-hover/item:scale-[1.03] duration-300 ease-out bg-[#1e1e24]"
                  src="https://artworks.thetvdb.com/banners/v4/episode/10383043/screencap/6687b93d134d0.jpg"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black/70 from-20% to-transparent group-hover/item:to-black/40 transition-all duration-300 ease-out z-5" />
              <div className="absolute bottom-0 left-0 w-full rounded-lg z-[9]">
                <hr
                  className="border-red-600 !border-[.10rem] rounded-lg"
                  style={{ width: "2.01397%" }}
                />
              </div>
            </a>
            <div className="absolute bottom-0 left-0 px-3 py-2 text-white flex gap-2 items-center z-10">
              <div className="flex flex-col">
                <a
                  className="text-[0.8rem] sm:text-[0.95rem] font-semibold line-clamp-1 hover:text-[#ed2651]"
                  href="/anime/info/171457"
                >
                  Make Heroine ga Oosugiru!
                </a>
                <span className="text-[0.7rem] text-[#D1D7E0] font-medium">
                  00:29 / 23:59 - Episode 1
                </span>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 shrink-0 cursor-pointer relative group/item"
            style={{ cursor: "auto" }}
          >
            <button
              className="aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased absolute bg-white py-1 rounded-md flex flex-col gap-1 z-10 right-1 top-1 md:top-2 md:right-2 transition-all duration-200 ease-out md:opacity-0 group-hover/item:opacity-100 scale-90 group-hover/item:scale-100 group-hover/item:visible visible opacity-100 md:invisible shadow-md shadow-black/50 outline-none border-none"
              data-slot="trigger"
              aria-expanded="false"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </button>
            <a
              className="relative overflow-hidden w-60 sm:w-64 md:w-80 aspect-video group rounded-xl xl:rounded-2xl"
              href="/anime/watch?id=171457&host=kuro&ep=1&type=sub"
            >
              <div className="overflow-hidden w-full aspect-video rounded-xl xl:rounded-2xl">
                <img
                  alt="Make Heroine ga Oosugiru!"
                  loading="lazy"
                  width={155}
                  height={230}
                  decoding="async"
                  data-nimg={1}
                  className="w-full aspect-video object-cover rounded-xl xl:rounded-2xl group-hover/item:scale-[1.03] duration-300 ease-out bg-[#1e1e24]"
                  src="https://artworks.thetvdb.com/banners/v4/episode/10383043/screencap/6687b93d134d0.jpg"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black/70 from-20% to-transparent group-hover/item:to-black/40 transition-all duration-300 ease-out z-5" />
              <div className="absolute bottom-0 left-0 w-full rounded-lg z-[9]">
                <hr
                  className="border-red-600 !border-[.10rem] rounded-lg"
                  style={{ width: "2.01397%" }}
                />
              </div>
            </a>
            <div className="absolute bottom-0 left-0 px-3 py-2 text-white flex gap-2 items-center z-10">
              <div className="flex flex-col">
                <a
                  className="text-[0.8rem] sm:text-[0.95rem] font-semibold line-clamp-1 hover:text-[#ed2651]"
                  href="/anime/info/171457"
                >
                  Make Heroine ga Oosugiru!
                </a>
                <span className="text-[0.7rem] text-[#D1D7E0] font-medium">
                  00:29 / 23:59 - Episode 1
                </span>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-2 shrink-0 cursor-pointer relative group/item"
            style={{ cursor: "auto" }}
          >
            <button
              className="aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased absolute bg-white py-1 rounded-md flex flex-col gap-1 z-10 right-1 top-1 md:top-2 md:right-2 transition-all duration-200 ease-out md:opacity-0 group-hover/item:opacity-100 scale-90 group-hover/item:scale-100 group-hover/item:visible visible opacity-100 md:invisible shadow-md shadow-black/50 outline-none border-none"
              data-slot="trigger"
              aria-expanded="false"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                />
              </svg>
            </button>
            <a
              className="relative overflow-hidden w-60 sm:w-64 md:w-80 aspect-video group rounded-xl xl:rounded-2xl"
              href="/anime/watch?id=171457&host=kuro&ep=1&type=sub"
            >
              <div className="overflow-hidden w-full aspect-video rounded-xl xl:rounded-2xl">
                <img
                  alt="Make Heroine ga Oosugiru!"
                  loading="lazy"
                  width={155}
                  height={230}
                  decoding="async"
                  data-nimg={1}
                  className="w-full aspect-video object-cover rounded-xl xl:rounded-2xl group-hover/item:scale-[1.03] duration-300 ease-out bg-[#1e1e24]"
                  src="https://artworks.thetvdb.com/banners/v4/episode/10383043/screencap/6687b93d134d0.jpg"
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black/70 from-20% to-transparent group-hover/item:to-black/40 transition-all duration-300 ease-out z-5" />
              <div className="absolute bottom-0 left-0 w-full rounded-lg z-[9]">
                <hr
                  className="border-red-600 !border-[.10rem] rounded-lg"
                  style={{ width: "2.01397%" }}
                />
              </div>
            </a>
            <div className="absolute bottom-0 left-0 px-3 py-2 text-white flex gap-2 items-center z-10">
              <div className="flex flex-col">
                <a
                  className="text-[0.8rem] sm:text-[0.95rem] font-semibold line-clamp-1 hover:text-[#ed2651]"
                  href="/anime/info/171457"
                >
                  Make Heroine ga Oosugiru!
                </a>
                <span className="text-[0.7rem] text-[#D1D7E0] font-medium">
                  00:29 / 23:59 - Episode 1
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-nowrap scrollbar-hide overflow-x-auto gap-4 shrink-0" />
        </div>
      </div>
    </div>
    <div className="sm:max-w-[97%] md:max-w-[95%] xl:max-w-[95%] mx-auto flex flex-col md:gap-11 sm:gap-7 gap-5 md:mt-4">
      <div>
        <div style={{ cursor: "auto" }} />
      </div>
      <div />
      <div>
       <LatestAnime/>
      </div>
      <div className="lg:flex lg:flex-row justify-between lg:gap-20">
        <div
          className="VerticalList_verticalcard__EZzzO"
          style={{ display: "flex" }}
        >
          <div className="items-center gap-2 px-3 xl:px-0 hidden lg:flex">
            <span className="w-[0.35rem] h-6 md:w-[0.3rem] rounded-md bg-white" />
            <h1 className="text-[19px] sm:text-[22px] my-4 font-medium md:font-semibold">
              Top 10 Anime
            </h1>
          </div>
          <div className="VerticalList_mobiletop__nLEOa">
            <div className="flex flex-row gap-[8px] items-center">
              <span className="VerticalList_bar___qiZ9" />
              <h1 className="VerticalList_mobiletitle__AI0p7">
                Chapter Update
              </h1>
            </div>
          </div>
          <div className="VerticalList_vcarditem__aVQGc group">
            <div className="VerticalList_vcardcontent__Au1Vj">
              <div className="VerticalList_vcardleft__z5Rbh">
                <a href="/anime/info/154587">
                  <img
                    alt="image"
                    loading="lazy"
                    width={60}
                    height={90}
                    decoding="async"
                    data-nimg={1}
                    className="VerticalList_vcardimg__jqFbU"
                    style={{ color: "transparent" }}
                    src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx154587-gHSraOSa0nBG.jpg"
                  />
                </a>
                <div className="VerticalList_vcardinfo__9BVa5">
                  <div className="VerticalList_linktitle__8dEuc">
                    <a href="/anime/info/154587">Sousou no Frieren</a>
                  </div>
                  <div className="VerticalList_vcardleftb__5Y_HC">
                    <span className="VerticalList_score__UgnIQ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-[14px] h-[14px] mt-[1px] mr-[2px]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                      9.1
                    </span>
                    <span className="VerticalList_dot__KHDZL">.</span>
                    <span className="VerticalList_season__FDIRU">Manga</span>
                    <span className="VerticalList_dot__KHDZL">.</span>
                    <span className="VerticalList_vstatus__jnB_t">
                      Berwarna
                    </span>
                  </div>
                </div>
              </div>
              <div className="VerticalList_vcardright__D2BAk">
                <div className="VerticalList_vpopular__n4w5W">
                  <span className="VerticalList_format__bHV3L">
                    <a href="/cihuy" className="text-purple-600">
                      Chapter 1
                    </a>
                  </span>
                  <div>
                    <span className="VerticalList_bpopular__AehQU">
                      1 Menit lalu
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-1 xl:max-w-[80%]" />
          </div>
          <div>
            <div className="scroll-smooth flex flex-col mx-auto my-1 md:my-0">
              <div className="flex items-center gap-2 px-3 xl:px-0">
                <span className="w-[0.35rem] h-6 md:w-[0.3rem] rounded-md bg-white" />
                <h1 className="text-[19px] sm:text-[22px] my-4 font-medium md:font-semibold">
                  Komik
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
                  id="Next Season"
                  style={{ cursor: "auto" }}
                >
                  <a
                    href="/komik/can-i-be-loving-towards-my-wife-who-wants-to-do-all-kinds-of-things/"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="relative flex flex-col h-full hover:cursor-pointer group w-[105px] sm:w-[135px] md:w-[155px] xl:w-[175px]">
                      <div className="relative h-[160px] w-[105px] sm:w-[135px] sm:h-[190px] md:h-[230px] md:w-[155px] xl:h-[255px] xl:w-[175px] rounded-xl xl:rounded-2xl">
                        <div className="w-full h-full rounded-xl xl:rounded-2xl overflow-hidden bg-[#1e1e24] aspect-[15/9] flex-shrink-0 shadow-[4px_0px_5px_0px_rgba(0,0,0,0.3)] group">
                          <img
                            alt="Re:Zero kara Hajimeru Isekai Seikatsu 3rd Season"
                            loading="eager"
                            width={155}
                            height={230}
                            decoding="async"
                            data-nimg={1}
                            className="w-full h-full object-cover rounded-xl xl:rounded-2xl transition-transform duration-300 group-hover:scale-105"
                            style={{ color: "transparent" }}
                            src="https://komikcast.cafe/wp-content/uploads/2021/07/Komik-Can-I-Be-Loving-Towards-My-Wife-Who-Wants-to-Do-All-Kinds-of-Things.png"
                          />
                        </div>
                        <div className="w-full h-full rounded absolute group-hover:bg-gradient-to-t from-black/85 to-transparent opacity-0 group-hover:opacity-100 top-0 z-[5] transition-all duration-300 ease justify-center">
                          <div className="bottom-4 left-0 right-0 absolute text-xs font-medium flex flex-wrap items-center justify-center gap-[.3rem] z-[7]">
                            <span className="uppercase">Manga</span>
                            <span className="text-[10px]">•</span>
                            <span className=""> 7</span>
                          </div>
                        </div>
                      </div>
                      <span className="overflow-hidden text-center text-[#d1d7e0] pt-1.5 px-1.5 sm:px-2 text-xs sm:text-sm font-medium line-clamp-2">
                        <span className="aspect-square w-2 h-2 inline-block mr-1 rounded-full bg-red-500 xl:hidden" />
                        Can I Be Loving Towards My Wife Who Wants to Do All
                        Kinds of Things?
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
);
    }
    
    export default Manga;

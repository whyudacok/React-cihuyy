// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#121212] mt-10 relative">
  <div className="absolute h-[101%] hidden lg:block w-full bg-gradient-to-r from-[#05010d] from-0% to-transparent to-15% z-0" />
  <div className="mx-auto w-full p-4 py-6 lg:pt-8 lg:pb-3 z-10">
    <div className="lg:flex lg:justify-between">
      <div className="mb-6 lg:mb-0 flex flex-col lg:flex-row lg:items-center lg:gap-6 lg:pl-16 ml-0 lg:ml-6">
        <a className="flex items-center w-fit z-10" href="/">
          <img
            alt="logo"
            loading="lazy"
            width={50}
            height={50}
            decoding="async"
            data-nimg={1}
            className="w-32 h-20"
            style={{ color: "transparent" }}
            src="/logo.svg"
          />
        </a>
        <p className="lg:text-[0.8rem] text-[0.75rem] text-[#ffffffb2] lg:w-[480px] mr-2 font-medium">
          This site does not store any files on our server, we are linked to the
          media which is hosted on 3rd party services.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:gap-16 sm:gap-6 sm:grid-cols-2 z-10">
        <div>
          <ul className="font-semibold flex flex-col gap-2 lg:text-[0.85rem] text-[0.75rem] text-[#ffffffb2]">
            <li className="">
              <a
                className="hover:text-white"
                href="/catalog?season=SUMMER&year=2024"
              >
                This Season
              </a>
            </li>
            <li className="">
              <a
                className="hover:text-white"
                href="/catalog?season=FALL&year=2024"
              >
                Upcoming Season
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="/catalog?format=MOVIE">
                {" "}
                Movies
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="/catalog?format=TV">
                {" "}
                Tv Shows
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="font-semibold flex flex-col gap-2 lg:text-[0.85rem] text-[0.75rem] text-[#ffffffb2]">
            <li>
              <a className="hover:text-white" href="/changelog">
                Changelog
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="/dmca">
                {" "}
                DMCA
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="hover:text-white"
                href="https://ko-fi.com/luckyhv"
              >
                Donate
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div className="bg-tersier border-t border-white/5 mt-2 z-10" />
  <div className="mx-auto w-full lg:max-w-[95%] lg:pl-16 lg:flex lg:items-center lg:justify-between lg:text-[0.8rem] text-[0.7rem] text-[#ffffffb2] py-3 z-10">
    <span className="sm:text-center ms-5 lg:ms-0">
      ©{/* */}2024{/* */}
      <a className="hover:text-white !z-[15]" href="/">
        ANICUY™
      </a>{" "}
      | Made by <span className="font-bold z-10">Kizoy app</span>
    </span>
    <div className="flex mt-4 items-center gap-4 lg:justify-center lg:mt-0 z-10 mr-2">
      <a
        target="_blank"
        className="ml-4 hover:text-gray-900 dark:hover:text-white z-10"
        href="https://twitter.com/aniplayz_"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[22px] h-[22px]"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23"
          />
        </svg>
        <span className="sr-only">Twitter community</span>
      </a>
      <a
        target="_blank"
        className="hover:text-gray-900 dark:hover:text-white z-10"
        href="https://www.reddit.com/r/Aniplay/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[22px] h-[22px]"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M19.96 1.75c-.873 0-1.636.479-2.038 1.188l-3.6-.739a.75.75 0 0 0-.841.442c-.411.966-1.027 2.431-1.542 3.685c-.226.552-.434 1.066-.596 1.48c-1.918.092-3.692.59-5.157 1.384a3.066 3.066 0 1 0-3.817 4.57a5.371 5.371 0 0 0-.132 1.187c0 2.04 1.151 3.842 2.921 5.114c1.77 1.273 4.191 2.044 6.842 2.044c2.65 0 5.071-.771 6.842-2.044c1.77-1.272 2.921-3.073 2.921-5.114c0-.405-.045-.802-.132-1.186a3.065 3.065 0 1 0-3.817-4.57c-1.39-.755-3.059-1.241-4.864-1.368l.377-.928c.419-1.021.907-2.185 1.295-3.103l3.018.62a2.343 2.343 0 1 0 2.32-2.662m-.842 2.342a.842.842 0 1 1 1.685 0a.842.842 0 0 1-1.685 0m1.983 8.25c-.47-.883-1.166-1.673-2.024-2.334a1.566 1.566 0 1 1 2.024 2.334M4.923 10.008A1.566 1.566 0 1 0 2.9 12.342c.47-.883 1.166-1.673 2.024-2.334m10.614 4.94a1.447 1.447 0 1 0 0-2.895a1.447 1.447 0 0 0 0 2.894M9.905 13.5a1.447 1.447 0 1 1-2.895 0a1.447 1.447 0 0 1 2.895 0M8.85 16.629a.75.75 0 0 0-.8 1.268l.345.218a6.75 6.75 0 0 0 7.202 0l.345-.217a.75.75 0 1 0-.8-1.27l-.345.218a5.25 5.25 0 0 1-5.602 0z"
            clipRule="evenodd"
          />
        </svg>
        <span className="sr-only">Reddit community</span>
      </a>
      <a
        target="_blank"
        className="hover:text-gray-900 dark:hover:text-white z-10"
        href="https://discord.gg/Zws2rAGSN6"
      >
        <svg
          className="w-[22px] h-[22px]"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 21 16"
        >
          <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
        </svg>
        <span className="sr-only">Discord community</span>
      </a>
    </div>
  </div>
</footer>

  );
};

export default Footer;

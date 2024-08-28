import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > lastScrollTop && scrollTop > 50) {
        setScrollingDown(true);
      } else if (scrollTop < lastScrollTop && scrollTop <= 50) {
        setScrollingDown(false);
      }

      setLastScrollTop(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);

  return (
    <nav
      id="navbar"
      className={`flex justify-between items-center text-white m-auto fixed top-0 left-0 right-0 z-30 transition-all duration-300 px-[3%] lg:pl-[7%] xl:pl-[6.5%] bg-transparent ${
        scrollingDown ? 'bg-black bg-opacity-80 backdrop-blur-md h-[62px]' : 'h-[75px]'
      }`}
    >
      <div className="flex items-center gap-8">
        <a href="/">
          <img
            alt="logo"
            fetchpriority="high"
            width="50"
            height="50"
            decoding="async"
            className="w-32 !h-[36px] mt-1"
            style={{ color: 'transparent' }}
            src="https://i.ibb.co.com/THC5BXM/20240717-152630.png"
          />
        </a>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          title="Search"
          className="w-[26px] h-[26px] outline-none lg:hidden"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 15l6 6m-11-4a7 7 0 110-14 7 7 0 010 14z"
            />
          </svg>
        </button>
        <div></div>
        <button
          className="flex relative justify-center items-center box-border overflow-hidden align-middle outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-tiny bg-secondary text-secondary-foreground rounded-full ring-2 ring-offset-2 ring-offset-background dark:ring-offset-background-dark ring-secondary z-10 aria-expanded:scale-[0.97] aria-expanded:opacity-70 subpixel-antialiased transition-transform w-[32px] h-[32px] backdrop-blur-sm"
          aria-haspopup="true"
          aria-expanded="false"
          type="button"
        >
          <img
            src="https://i.ibb.co.com/z4Xzbyf/06d91bc4-ac34-47f2-96e5-818bf495cf57.jpg"
            className="flex object-cover w-full h-full transition-opacity !duration-500 opacity-0 data-[loaded=true]:opacity-100"
            alt="kizoy"
            data-loaded="true"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

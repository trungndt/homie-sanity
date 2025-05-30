'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../app/logo.png';

export default function Header() {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false); // close mobile menu after click
  };

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 px-4 md:px-8 lg:px-16 transition-all duration-300 ${scrolled ? 'nav-stick shadow bg-black bg-opacity-70' : ''
        }`}
    >
      <nav className="container mx-auto flex justify-between items-center py-3">
        {/* Mobile menu button */}
        <div className="md:hidden">
          {/* Centered Logo */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 -translate-y-0 cursor-pointer z-10"
            onClick={() => scrollTo('top')}
          >
            <Image src={logo} alt="Logo" className="h-[32px] sm:h-[36px] md:h-[40px] w-auto"/>
          </div>
          
          <button onClick={() => setOpen(!open)} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop menu with centered logo */}
        <ul className="hidden md:flex w-full justify-center items-center text-xs sm:text-sm text-white">
          <li className="mx-4 cursor-pointer" onClick={() => scrollTo('about')}>
            VỀ HOMIE BAND
          </li>
          <li className="mx-4 cursor-pointer" onClick={() => scrollTo('projects')}>
            DỰ ÁN NỔI BẬT
          </li>
          <li className="mx-4 cursor-pointer px-4" onClick={() => scrollTo('top')}>
            <Image src={logo} alt="Logo" className="h-[32px] sm:h-[36px] md:h-[40px] w-auto" />
          </li>
          <li className="mx-4 cursor-pointer" onClick={() => scrollTo('team')}>
            THÀNH VIÊN HOMIE
          </li>
          <li className="mx-4 cursor-pointer" onClick={() => scrollTo('contact')}>
            LIÊN HỆ
          </li>
        </ul>
      </nav>



      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col space-y-4 px-4 pb-4 text-white">
          <li className="cursor-pointer" onClick={() => scrollTo('about')}>
            VỀ HOMIE BAND
          </li>
          <li className="cursor-pointer" onClick={() => scrollTo('projects')}>
            DỰ ÁN NỔI BẬT
          </li>
          <li className="cursor-pointer" onClick={() => scrollTo('team')}>
            THÀNH VIÊN HOMIE
          </li>
          <li className="cursor-pointer" onClick={() => scrollTo('contact')}>
            LIÊN HỆ
          </li>
        </ul>
      )}
    </header>
  );
}

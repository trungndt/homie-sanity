'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '../app/logo.png';

export default function Header() {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 px-5 xl:px-20 transition-all duration-300 ${scrolled ? 'nav-stick shadow' : ''}`}>
      <nav className="container mx-auto flex justify-between text-center">
        {/* <img src="../app/logo.png" alt="Descriptive alt" className="w-auto h-[50px] cursor-pointer" onClick={() => scrollTo("top")} /> */}
        <ul className="flex w-full space-x-10 justify-center items-center text-sm text-white">
          <li className="cursor-pointer" onClick={() => scrollTo("about")}>VỀ HOMIE BAND</li>
          <li className="cursor-pointer" onClick={() => scrollTo("projects")}>DỰ ÁN NỔI BẬT</li>
          <li className="cursor-pointer" onClick={() => scrollTo("top")}>
            <Image src={logo} alt="Logo" className="w-auto h-[40px] px-10"/>
          </li>
          <li className="cursor-pointer" onClick={() => scrollTo("team")}>THÀNH VIÊN HOMIE</li>
          <li className="cursor-pointer" onClick={() => scrollTo("contact")}>LIÊN HỆ</li>
        </ul>
      </nav>
    </header>
  );
}

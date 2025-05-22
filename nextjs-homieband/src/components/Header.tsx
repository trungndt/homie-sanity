'use client';
import Image from 'next/image';
import logo from '../app/logo.png';

export default function Header() {
  const scrollTo = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* <img src="../app/logo.png" alt="Descriptive alt" className="w-auto h-[50px] cursor-pointer" onClick={() => scrollTo("top")} /> */}
        <Image src={logo} alt="Logo" className="w-auto h-[50px] cursor-pointer" onClick={() => scrollTo("top")} />

        <ul className="flex space-x-6 text-sm font-medium">
          <li className="cursor-pointer" onClick={() => scrollTo("about")}>About Us</li>
          <li className="cursor-pointer" onClick={() => scrollTo("projects")}>Projects</li>
          <li className="cursor-pointer" onClick={() => scrollTo("team")}>Team</li>
          <li className="cursor-pointer" onClick={() => scrollTo("contact")}>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

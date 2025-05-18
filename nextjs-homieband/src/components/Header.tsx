'use client';
export default function Header() {
    const scrollTo = (id: string) => {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    };
  
    return (
      <header className="fixed top-0 w-full bg-white z-50 shadow">
        <nav className="container mx-auto flex justify-between items-center px-4 py-3">
          <div
            className="text-xl font-bold cursor-pointer"
            onClick={() => scrollTo("top")}
          >
            Homie Band
          </div>
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
  
// Node Modules
import { useState } from "react";

//  Components
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid-cols-[1fr,auto,1fr]">
        <h1>
          <a href="/" className="logo">
            <img
              src="/images/logo.png"
              width={50}
              height={50}
              alt="Diogo Caeiro Logo"
              className="block"
            />
          </a>
        </h1>

        {/* Menu Button */}
        <div className="md:hidden absolute right-4 z-30">
          <button
            className="menu-btn flex items-center justify-center"
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="material-symbols-rounded text-2xl">
              {navOpen ? `close` : `menu`}
            </span>
          </button>
        </div>

        {/* NavBar */}
        <div className="relative">
          <Navbar navOpen={navOpen} />
        </div>

        {/* Contact Me button */}
        <div className="hidden md:flex justify-end">
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

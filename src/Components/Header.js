import React, { useState } from "react";
import logo from "../assets/logo-spiridise.png";


const Header = () => {
  const [burger, setBurger] = useState(false);

  const links = [
    { name: "Offres", link: "#offres" },
    { name: "Créations", link: "#creations" },
    { name: "Présentations", link: "#presentations" },
    { name: "Blog", link: "/blog" },
  ];

  const handleClick = () => {
    setBurger(false);
  };

  return (
    <header className="bg-blue-s h-14 w-full shadow-md fixed top-0 left-0">
      <div className="md:flex items-center justify-between ">
        <div className="font-bold cursor-pointer flex items-center text-white">
          <img src={logo} alt="logo Spiridise" className="w-20" />
          <p className="text-base md:text-xl">Spiridise</p>
        </div>
        <div
          onClick={() => setBurger(!burger)}
          className="text-3xl absolute right-8 top-4 text-white cursor-pointer md:hidden"
        >
          <ion-icon name={burger ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`bg-blue-s pb-12 absolute text-center z-[-1] w-full left-0 transition-all duration-300 ease-in ${
            burger ? "top-10 opacity-100" : "top-[-490px]"
          } opacitiy-0 md:opacity-100 md:z-auto md:w-auto md:static md:flex md:items-center md:pb-0 md:pl-0`}
        >
          {links.map((link) => (
            <li key={link.name} className="my-7 md:ml-8 md:my-0">
              <a
                href={link.link}
                className="text-white hover:text-slate-800 duration-300"
                onClick={handleClick}
                
              >
                {link.name}
              </a>
            </li>
          ))}
          <a
            href="#contact"
            className="bg-orange-s text-white font-bold py-2 px-6 rounded duration-300 md:ml-8 md:mr-8 hover:text-orange-s hover:bg-white"
            onClick={handleClick}
          >
            Contact
          </a>
        </ul>
      </div>
    </header>
  );
};

export default Header;

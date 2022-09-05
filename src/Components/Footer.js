import React from "react";
import logo from "../assets/logo-spiridise.png";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-s">
      <div class="mx-auto max-w-7xl  flex w-full flex-col-reverse items-center justify-between space-y-6 space-y-reverse px-4 py-10 text-lg font-medium text-white md:flex-row md:items-start md:space-y-0">
        <div class="flex items-center space-x-4">
          <img src={logo} alt="logo spiridise" className="w-20" />
          <p>Spiridise © 2022.</p>
        </div>
        <nav class="flex flex-col flex-wrap items-center  sm:flex-row sm:space-x-4 sm:space-y-0">
          <a href="#accueil" class="hover:text-black">
            Accueil
          </a>
          <a href="/blog" class="hover:text-black">
            Blog
          </a>
          <a href="/Mentions" class="hover:text-black">
            Mentions Légales
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

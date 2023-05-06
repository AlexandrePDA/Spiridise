import React from "react";
import logo from "../assets/logo-spiridise.png";

const Footer = () => {
  return (
    <footer className="w-full bg-blue-s mt-12">
      <div className="mx-auto max-w-7xl  flex w-full flex-col-reverse items-center justify-between space-y-6 space-y-reverse px-4 py-10 text-lg font-medium text-white md:flex-row md:items-start md:space-y-0">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo spiridise" className="w-20" />
          <p>Spiridise © 2023.</p>
        </div>
        <nav className="flex flex-col flex-wrap items-center  sm:flex-row sm:space-x-4 sm:space-y-0">

          
{/*  <a href="/blog" className="hover:text-black">
            Blog
          </a>*/}
          
          <a href="/Mentions" className="hover:text-black">
            Mentions Légales
          </a> 


          <a href="#accueil">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

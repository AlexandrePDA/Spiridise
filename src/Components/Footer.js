import React from 'react';

const Footer = () => {
    return (
        <div className="bg-blue-s mt-4 p-9 justify-center items-center gap-y-3 flex flex-col md:flex-row md:gap-x-8">
            <a href="#accueil" className="text-white hover:text-slate-800 duration-300 hover:scale-110 ">
                Accueil
            </a>
            <a href="/blog" className="text-white hover:text-slate-800 duration-300 hover:scale-110 ">Blog</a>
            <a href="/Mentions" className="text-white hover:text-slate-800 duration-300 hover:scale-110 ">Mentions Légales</a>
        </div>
    );
};

export default Footer;
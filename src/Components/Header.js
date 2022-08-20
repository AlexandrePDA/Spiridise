import React, { useState } from 'react';
import logo from "../assets/logo-spiridise.png"
import Contact from './Contact';

const Header = () => {
    const [burger, setBurger] = useState(false)

    const links = [
        {name: "Offres", 
        link: '/'},
        {name: "Créations", 
        link: '/'},
        {name: "Présentations", 
        link: '/'},
        {name: "Blog", 
        link: '/blog'},
    ];

    return (
        <header className="bg-orange-s h-14 w-full shadow-md fixed top-0 left-0">
            <div className="md:flex items-center justify-between ">
                <div className="font-bold cursor-pointer flex items-center font-dosis text-white">  
                <img src={logo} alt="" className="w-20"/>
                <p className="text-base md:text-xl">Spiridise</p>
                </div>
                <div onClick={() => setBurger(!burger)} className="text-3xl absolute right-8 top-4 text-white cursor-pointer md:hidden">
                <ion-icon name={burger ? 'close' : 'menu'}></ion-icon>
                </div>
                <ul className={`pb-12 absolute text-center bg-orange-s z-[-1] w-full left-0 pl-9 transition-all duration-300 ease-in ${burger ? 'top-10 opacity-100' : 'top-[-490px]'} opacitiy-0 md:opacity-100 md:z-auto md:w-auto md:static md:flex md:items-center md:pb-0 md:pl-0`}>
                    {links.map((link) => (
                        <li key={link.name} className="my-7 md:ml-8 md:my-0">
                            <a href={link.link} className="text-gray-800 hover:text-white duration-300" >{link.name}</a>
                        </li>
                    ))}
                    <Contact/>
                </ul>
            </div>
        </header>
    );
};

export default Header;
import React from 'react';

const logosMarques = [
    {
    name: "leroymerlin",
    img: require("../assets/logos-marques/leroymerlin.png"),
    link: "https://www.leroymerlin.fr/produits/marques/naterial/?fwd=naterial"
    },
    {
    name: "shine",
    img: require("../assets/logos-marques/shine.png"),
    link: "https://www.shine.fr/blog/frais-pro-repas/"
    },
    {
      name: "adeo",
      img: require("../assets/logos-marques/adeo.png"),
      link: "https://www.leroymerlin.fr/produits/marques/naterial/?fwd=naterial"
    },
    {
      name: "arsen",
      img: require("../assets/logos-marques/arsen.png"),
      link: "https://arsen.co/"
    },
    {
      name: "mozaikrh",
      img: require("../assets/logos-marques/mozaikrh.png"),
      link: "https://www.fondation-mozaik.org/"
    },
    {
      name: "blueCoders",
      img: require("../assets/logos-marques/bluecoders.png"),
      link: "https://www.bluecoders.com/?gclid=Cj0KCQjw0oyYBhDGARIsAMZEuMu2CXhQI2KfkYh9UD_MIRd6uibFd_SZRGiygwxPlvyLh2JWrQ2SXskaAkbyEALw_wcB"
    },
];

const Collaborations = () => {
  
  return (
    <div className="flex flex-col items-center justify-center mt-6 pb-6 w-full ">
      <div className="flex flex-col items-center justify-between lg:flex lg:gap-x-8 lg:flex-row md:grid md:grid-rows-2 md:grid-flow-col md:gap-6">

      {logosMarques.map((logo, index) => (
          <ul key={index}>
            <li>
              <a href={logo.link}>
            <img className="h-30 w-28 mb-7" src={logo.img} alt="logo marques collaborations" />
            </a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Collaborations;
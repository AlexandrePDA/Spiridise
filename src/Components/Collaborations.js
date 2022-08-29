import React from 'react';
import '../slider.css'

// const logosMarques = [
//     {
//     name: "leroymerlin",
//     img: require("../assets/logos-marques/leroymerlin.png"),
//     link: "https://www.leroymerlin.fr/produits/marques/naterial/?fwd=naterial"
//     },
//     {
//     name: "shine",
//     img: require("../assets/logos-marques/shine.png"),
//     link: "https://www.shine.fr/blog/frais-pro-repas/"
//     },
//     {
//       name: "adeo",
//       img: require("../assets/logos-marques/adeo.png"),
//       link: "https://www.leroymerlin.fr/produits/marques/naterial/?fwd=naterial"
//     },
//     {
//       name: "arsen",
//       img: require("../assets/logos-marques/arsen.png"),
//       link: "https://arsen.co/"
//     },
//     {
//       name: "mozaikrh",
//       img: require("../assets/logos-marques/mozaikrh.png"),
//       link: "https://www.fondation-mozaik.org/"
//     },
//     {
//       name: "blueCoders",
//       img: require("../assets/logos-marques/bluecoders.png"),
//       link: "https://www.bluecoders.com/?gclid=Cj0KCQjw0oyYBhDGARIsAMZEuMu2CXhQI2KfkYh9UD_MIRd6uibFd_SZRGiygwxPlvyLh2JWrQ2SXskaAkbyEALw_wcB"
//     },
// ];

const Collaborations = () => {
  
  return (
    // <div className="flex flex-col items-center justify-center mt-6 pb-6 w-full ">
    //   <div className="flex flex-col items-center justify-between gap-y-8 lg:flex lg:gap-x-8 lg:flex-row md:grid md:grid-rows-2 md:grid-flow-col md:gap-6">

    //   {logosMarques.map((logo, index) => (
    //       <ul key={index}>
    //         <li>
    //           <a href={logo.link}>
    //         <img className="h-30 w-28 transition-all duration-300 hover:scale-150" src={logo.img} alt="logo marques collaborations" />
    //         </a>
    //         </li>
    //       </ul>
    //     ))}
    //   </div>
    // </div>
    <div className="h-64 mx-auto relative w-4/5 grid place-items-center z-[-1] overflow-hidden slider">
       
      <div className="flex w-[calc(400px_*_12)] slider-track">

        <div className="flex items-center p-4 ">
          <img src={require("../assets/logos-marques/leroymerlin.png")} alt="logo leroy merlin" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/adeo.png")} alt="logo adeo" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/arsen.png")} alt="logo arsen" className="h-30 w-28"/>
        </div >
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/bluecoders.png")} alt="logo bluecoders" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/mozaikrh.png")} alt="logo moraikrh" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/shine.png")} alt="logo shine" className="h-30 w-28"/>
        </div>

        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/leroymerlin.png")} alt="logo leroy merlin" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/adeo.png")} alt="logo adeo" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/arsen.png")} alt="logo arsen" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/bluecoders.png")} alt="logo bluecoders" className="h-30 w-28"/>
        </div >
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/mozaikrh.png")} alt="logo moraikrh" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/shine.png")} alt="logo shine" className="h-30 w-28"/>
        </div>

        <div className="flex items-center p-4 ">
          <img src={require("../assets/logos-marques/leroymerlin.png")} alt="logo leroy merlin" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/adeo.png")} alt="logo adeo" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/arsen.png")} alt="logo arsen" className="h-30 w-28"/>
        </div >
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/bluecoders.png")} alt="logo bluecoders" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/mozaikrh.png")} alt="logo moraikrh" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/shine.png")} alt="logo shine" className="h-30 w-28"/>
        </div>

        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/leroymerlin.png")} alt="logo leroy merlin" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/adeo.png")} alt="logo adeo" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/arsen.png")} alt="logo arsen" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/bluecoders.png")} alt="logo bluecoders" className="h-30 w-28"/>
        </div >
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/mozaikrh.png")} alt="logo moraikrh" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/shine.png")} alt="logo shine" className="h-30 w-28"/>
        </div>

        <div className="flex items-center p-4 ">
          <img src={require("../assets/logos-marques/leroymerlin.png")} alt="logo leroy merlin" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/adeo.png")} alt="logo adeo" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/arsen.png")} alt="logo arsen" className="h-30 w-28"/>
        </div >
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/bluecoders.png")} alt="logo bluecoders" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/mozaikrh.png")} alt="logo moraikrh" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/shine.png")} alt="logo shine" className="h-30 w-28"/>
        </div>

        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/leroymerlin.png")} alt="logo leroy merlin" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/adeo.png")} alt="logo adeo" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/arsen.png")} alt="logo arsen" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/bluecoders.png")} alt="logo bluecoders" className="h-30 w-28"/>
        </div >
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/mozaikrh.png")} alt="logo moraikrh" className="h-30 w-28"/>
        </div>
        <div className="flex items-center p-4">
          <img src={require("../assets/logos-marques/shine.png")} alt="logo shine" className="h-30 w-28"/>
        </div>


      </div>

    </div>
  );
}

export default Collaborations;
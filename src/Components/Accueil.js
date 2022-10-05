import React from "react";
import picwoman from "../assets/woman-first-block.svg";

const Accueil = () => {
  return (
    <section id="accueil" class="text-gray-600 body-font">
      <div class="container  max-w-8xl mx-auto flex px-6 pt-32 md:pt-52 md:pb-20 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class=" title-font sm:text-5xl text-3xl mb-1 font-extrabold  text-gray-900">
            Spiridise </h1>
            <h2 class="title-font sm:text-3xl text-2xl mb-4 font-extrabold text-gray-900">
            Et si l'<span className="bg-orange-s text-white">action</span> <br  /> commençait  par la réd<span className="bg-orange-s text-white">action</span> ? 
            </h2>
          
          <p class="mb-8 leading-relaxed">
            Spécialisé dans la rédaction web, Spiridise vous accompagne dans vos projets de stratégie digitale en vous proposant des solutions innovantes et impactantes.
          </p>
          <div class="flex justify-center">
            <a href="#offres">
              <button class="inline-flex   border-0 py-2 px-6 transition-all duration-300 focus:outline-none bg-blue-s text-white rounded text-lg hover:bg-gray-600">
                Découvrir
              </button>
            </a>
            <a href="#contact">
              <button class="ml-4 inline-flex text-white bg-orange-s border-0 py-2 px-6 transition-all duration-300 focus:outline-none hover:text-orange-s hover:bg-gray-600 rounded text-lg">
                Contact
              </button>
            </a>
          </div>
        </div>
        

        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            class="object-cover object-center rounded hidden md:inline"
            alt="hero"
            src={picwoman}
          />
        </div>
        

      </div>
    </section>
  );
};

export default Accueil;

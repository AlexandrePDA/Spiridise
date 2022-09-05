import React from "react";
import picwoman from "../assets/woman-first-block.svg";

const Accueil = () => {
  return (
    <section id="accueil" class="text-gray-600 body-font">
      <div class="container  max-w-7xl mx-auto flex px-6 pt-32 md:pt-52 pb-20 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-5xl text-3xl mb-4 font-extrabold text-gray-900">
            Spiridise
            <br  />
            Votre rédacteur web
          </h1>
          <p class="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. 
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
            class="object-cover object-center rounded"
            alt="hero"
            src={picwoman}
          />
        </div>
      </div>
    </section>
  );
};

export default Accueil;

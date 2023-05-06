import React from "react";
import RotatingPyramid from "./Test";

const Accueil = () => {
  return (
    <section id="accueil" className="text-gray-600 body-font w-screen 2xl:h-3/6 mt-24 2xl:mt-16 ">
      <div className="flex flex-col 2xl:flex-row">
        <div className="flex items-center justify-center w-full py-8 2xl:mt-16 2xl:mx-[10rem] 2xl:h-[32rem] 2xl:w-1/2">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-800 2xl:text-left text-center  leading-10 2xl:text-4xl">
              Écrivons <span className="bg-orange-s rounded-lg font-bold px-3  text-white">maintenant</span> <br/> les mots de demain 💫
            </h2>

            <p className="mt-4 text-sm text-gray-500  lg:text-base">
            Bénéficiez d'une véritable expertise dans le domaine de la communication digitale. Spiridise vous accompagne dans le déploiement d'une stratégie éditoriale numérique, destinée à améliorer votre branding et optimiser votre présence en ligne.             </p>

            <div className="flex flex-col -z-50 mt-6 space-y-3 lg:space-y-0 lg:flex-row">
              
              <a
                href="#presentation"
                className="shadow-xl  text-center bg-gray-100 font-bold py-2 px-6 rounded-xl duration-300 md:ml-8 md:mr-8  hover:bg-white"
              >
                Consulter nos rédactions
              </a>
              <a
                href="#contact"
                className="shadow-xl text-center bg-gray-100 font-bold py-2 px-6 rounded-xl duration-300 md:ml-8 md:mr-8  hover:bg-white"
              >
                Passer à l'action 
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center z-[-15] 2xl:ml-[-20rem] 2xl:pl-50">
          <div className="w-33 h-33 2xl:w-auto 2xl:h-auto">
            <RotatingPyramid/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accueil;
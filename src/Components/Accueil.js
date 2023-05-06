import React from "react";
import RotatingPyramid from "./Test";
import Portfolio from '../assets/Portfolio2023.pdf'


const Accueil = () => {

 
  

  return (
    <section id="accueil" className=" body-font mt-5">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center px-8 2xl:px-24 py-8 2xl:py-32">
        <div className="2xl:w-1/2 2xl:pr-16">
          <h1 className="text-3xl lg:text-4xl font-semibold text-gray-600 text-center 2xl:text-left leading-10">
            Écrivons
            <span className="bg-orange-s mx-2  rounded-lg font-bold px-3 text-white">
              maintenant
            </span>
            <br /> les mots de demain 💫
          </h1>
          <p className="mt-4 mb-12 2xl:mb-4 text-xl px-4 2xl:px-0 text-grey-subtitle-s text-justify  2xl:max-w-md">
            Bénéficiez d'une véritable expertise dans le domaine de la
            communication digitale. Spiridise vous accompagne dans le déploiement
            d'une stratégie éditoriale numérique, destinée à améliorer votre
            branding et à optimiser votre présence en ligne.
          </p>

          <div className="flex flex-col justify-center items-center 2xl:flex-row mt-6 space-y-3 2xl:space-y-0 2xl:space-x-6">
            <a
              href={Portfolio}
              className="shadow-xl max-w-sm w-3/4 text-center text-gray-600 bg-gray-100 font-bold py-2 px-6 rounded-xl duration-300 hover:bg-white"
            >
              Découvrir&nbsp;&nbsp;nos&nbsp;&nbsp;contenus
            </a>
            <a
              href="#contact"
              className="shadow-xl max-w-sm w-3/4 text-center text-gray-600 bg-gray-100 font-bold py-2 px-6 rounded-xl duration-300 hover:bg-white"
            >
              Passer à l'action
            </a>
          </div>
        </div>

        <div className="hidden 2xl:inline 2xl:w-1/2 2xl:pl-16">
          <div className="w-full h-0 relative pb-[100%]">
            <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-center z-[-15]">
              <div className="w-40 h-40 2xl:w-auto 2xl:h-auto opacity-70">
                <RotatingPyramid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accueil;

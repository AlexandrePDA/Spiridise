import React from "react";

const Accueil = () => {
  return (
    <section id="accueil" className="text-gray-600 body-font w-screen lg:h-3/6 mt-24 lg:mt-16 ">
      <div className="lg:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-800 lg:text-left text-center  leading-10 lg:text-4xl">
              Écrivons <span className="bg-orange-s rounded-lg font-bold px-3  text-white">maintenant</span> <br/> les mots de demain 💫
            </h2>

            <p className="mt-4 text-sm text-gray-500  lg:text-base">
              Profitez d'une véritable expertise dans le domaine de la communication écrite : Spridise offre des solutions innovantes pour améliorer votre branding et accroître votre visibilité digitale.
            </p>

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

        <div className="w-full lg:flex   justify-center items-center   lg:w-1/2  hidden">
            <div>
                <p className="text-6xl font-anton font-bold leading-relaxed">
          IMAGINER. <br/>
          DÉVELOPPER. <br/>
          CRÉER. <br/>

                </p>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Accueil;

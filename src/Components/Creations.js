import React from "react";

const Creations = () => {
  return (
    <section id="creations" className="text-gray-600 mt-20 body-font pt-6">
      <h2 className="text-center font-semibold w-full px-4  mx-auto mt-20 text-2xl lg:text-4xl leading-snug">
                Expert de la <span className="bg-orange-s rounded-lg font-bold px-3 py-1 text-white">communication&nbsp;&nbsp;digitale</span>
      </h2>
      <p className="text-center text-grey-subtitle-s text-2xl mt-4 w-full px-6 mx-auto ">
        Spiridise vous accompagne dans le déploiement d'une stratégie éditoriale numérique qui vous ressemble.
      </p>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {/* Brief */}
        <div className="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto z-[-20]">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-s text-white relative z-10 title-font font-medium text-sm">
            1
          </div>
          <div
            className="flex-grow md:pl-8 pl-6 flex  sm:items-center items-start flex-col sm:flex-row"
            data-aos="zoom-in-up"
            data-aos-delay="75"
          >
            <div className="flex-shrink-0 w-24 h-24 shadow-xl border  border-gray-100 rounded-full inline-flex items-center justify-center">
              <img
                src={require("../assets/Brief.png")}
                alt="logo recherches"
                className="w-2/4"
              />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                Brief
              </h2>
              <p className="leading-relaxed">
                Ensemble, nous convenons d'un cahier des charges détaillé selon
                vos attentes. Ainsi, vous êtes libre de déterminer la tonalité
                du texte, son registre, la technique employée et le style
                d'écriture.
              </p>
            </div>
          </div>
        </div>

        {/* Recherches */}
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto z-[-20]">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-s text-white relative z-10 title-font font-medium text-sm">
            2
          </div>
          <div
            className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
            data-aos="zoom-in-up"
            data-aos-delay="75"
          >
            <div className="flex-shrink-0 w-24 h-24 border border-gray-100 shadow-xl text-purple-500 rounded-full inline-flex items-center justify-center">
              <img
                src={require("../assets/world.png")}
                alt="logo redaction"
                className="w-2/4"
              />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                Recherches
              </h2>
              <p className="leading-relaxed">
                En fonction de vos besoins, nous effectuons des recherches
                poussés sur votre sujet afin de le traiter de la manière la
                plus claire et exhaustive possible.
              </p>
            </div>
          </div>
        </div>

        {/* Rédaction */}
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto z-[-20]">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-s text-white relative z-10 title-font font-medium text-sm">
            3
          </div>
          <div
            className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
            data-aos="zoom-in-up"
            data-aos-delay="75"
          >
            <div className="flex-shrink-0 w-24 h-24 border border-gray-100 shadow-xl text-purple-500 rounded-full inline-flex items-center justify-center">
              <img
                src={require("../assets/pinceau.png")}
                alt="logo redaction"
                className="w-2/4"
              />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                Rédaction
              </h2>
              <p className="leading-relaxed">
                C'est ici que s'opère la magie ... ✨ <br/> Nous créons votre contenu selon les directives que vous nous fournissez. 
              </p>
            </div>
          </div>
        </div>

        {/* Livraison */}
        <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto z-[-20]">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-s text-white relative z-10 title-font font-medium text-sm">
            4
          </div>
          <div
            className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
            data-aos="zoom-in-up"
            data-aos-delay="75"
          >
            <div className="flex-shrink-0 w-24 h-24 border border-gray-100 shadow-xl text-purple-500 rounded-full inline-flex items-center justify-center">
              <img
                src={require("../assets/envoi.png")}
                alt="logo livraison"
                className="w-2/4"
              />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                Livraison
              </h2>
              <p className="leading-relaxed">
                À l'ère du numérique l'envoi n'a jamais été aussi rapide ! Fichiers, .doc, .pdf ou document Google, c'est vous qui choisissez votre option préférée. 
              </p>
            </div>
          </div>
        </div>

        {/* Retouches */}
        <div className="flex relative pb-10 sm:items-center md:w-2/3 mx-auto z-[-20]">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-s text-white relative z-10 title-font font-medium text-sm">
            5
          </div>
          <div
            className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row"
            data-aos="zoom-in-up"
            data-aos-delay="75"
          >
            <div className="flex-shrink-0 w-24 h-24 border border-gray-100 shadow-xl text-purple-500 rounded-full inline-flex items-center justify-center">
              <img
                src={require("../assets/retouches.png")}
                alt="logo retouches"
                className="w-2/4"
              />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                Retouches
              </h2>
              <p className="leading-relaxed">
                Parce que les modifications de dernière minute sont fréquentes, nous proposons des retouches comprises dans le devis initial, pour un budget maîtrisé en toutes circonstances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creations;

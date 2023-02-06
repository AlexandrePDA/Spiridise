import React from "react";
import woman from "../assets/woman-second-block.svg";
import Typewriter from "typewriter-effect";




const Techniques = () => {
  return (
    <div id="offres" className="flex flex-col  justify-center items-center">
      <div className="hidden lg:flex items-center justify-center lg:mr-10">
        <img
          src={woman}
          alt="woman offres"
          className="hidden md:z-[-10] lg:inline md:scale-x-[-1] md:w-6/12 md:max-w-xl"
        />
        <div className="flex flex-col">
          <h2 className="text-5xl hidden text-white bg-orange-s z-[-100] lg:text-6xl lg:inline">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Copywriting")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Storytelling")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Ghostwriting")
                  .deleteAll()
                  .typeString("SEO")
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString("Rédaction")
                  .pauseFor(2000)
                  .start();
              }}
              options={{
                loop: true,
              }}
            />
          </h2>
          <div>
            <h3 className="text-xl text-center mx-2 lg:text-left lg:mx-0 lg:text-4xl">
              Une offre sur-mesure
            </h3>
            <h4 className="text-xl text-center lg:text-left lg:text-4xl">
              Pour chacun de vos projets 🚀
            </h4>
            <h3 className="text-xl mt-4 text-center lg:text-left lg:text-xl">Prêt à atteindre vos objectifs ? <br/> Retrouvez nos solutions digitales et efficaces.</h3>
            <h4 className="text-right mt-4 text-lg lg:text-xl" >Vous souhaitez :</h4>

          </div>
        </div>
      </div>

          {/* Mobile */}
      <div className="lg:hidden mt-10">
            <h2 className="text-2xl text-center mx-2 font-bold">
              Une offre <span className="bg-orange-s rounded-lg font-bold px-3 py-1 text-white">sur-mesure</span>
            </h2>
            <h2 className="text-2xl text-center  ">
              Pour chacun de vos projets 🚀
            </h2>
            <h3 className="text-xl mt-4 text-center ">Prêt à atteindre vos objectifs ? <br/> Retrouvez nos solutions digitales et efficaces.</h3>
            <h4 className="text-center mt-4 text-lg " >Vous souhaitez :</h4>

          </div>

      <section className="text-gray-600 body-font z-[-25]" >
        <div className="container px-5 py-20 mx-auto">
          {/* Copywritting */}
          <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col" data-aos="zoom-in-up" data-aos-delay="75"
     data-aos-duration="500">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-black flex-shrink-0 shadow-xl">
            <img
                src={require("../assets/cible.png")}
                alt="logo stroytelling"
                className="w-2/4"
              />
              
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
              <h2 className="text-orange-s text-2xl title-font font-medium mb-2">
                Vendre ?
              </h2>
              <h3 className="text-blue-s text-xl title-font font-medium mb-2">💪 Copywriting</h3>
              <p className="leading-relaxed text-base">
                Utilisé dans les domaines du marketing digital et de la publicité, le procédé du copywriting consiste à séduire afin de persuader ses prospects à passer à l'action.
              </p>
            </div>
          </div>

          {/* SEO */}
          <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col" data-aos="zoom-in-up" data-aos-delay="75"
     data-aos-duration="500">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-purple-500 flex-shrink-0 shadow-xl">
              <img
                src={require("../assets/engager.png")}
                alt="logo engager"
                className="w-2/4"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-orange-s text-2xl title-font font-medium mb-2">
                Engager ?
              </h2>
              <h3 className="text-blue-s text-xl title-font font-medium mb-2">📈 SEO</h3>
              <p className="leading-relaxed text-base">
                Appeler aussi référencement naturel, le SEO vise à améliorer le positionnement d'un site ou d'une page afin de lui permettre d'atteindre le Graal (aussi connu sous le nom de première page des résultats).
              </p>
            </div>
            
          </div>

          {/* RédacWeb */}
          <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col" data-aos="zoom-in-up" data-aos-delay="75"
     data-aos-duration="500">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-purple-500 flex-shrink-0 shadow-xl">
              <img
                src={require("../assets/loupe.png")}
                alt="logo rédaction web"
                className="w-2/4"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-orange-s text-2xl title-font font-medium mb-2">
                Expliquer ?
              </h2>
              <h3 className="text-blue-s text-xl title-font font-medium mb-2">💻 Rédaction web</h3>
              <p className="leading-relaxed text-base">
                Cette technique généraliste permet de désigner tout type de rédaction utilisé sur le web. Elle est souvent à visé didactique et cherche à instruire son public (un peu comme maintenant).
              </p>
            </div>
            
          </div>

          {/* Storytelling */}
          <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col" data-aos="zoom-in-up" data-aos-delay="75"
     data-aos-duration="500">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-purple-500 flex-shrink-0 shadow-xl">
              <img
                src={require("../assets/redaction.png")}
                alt="logo stroytelling"
                className="w-2/4"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-orange-s text-2xl title-font font-medium mb-2">
                Raconter ?
              </h2>
              <h3 className="text-blue-s text-xl title-font font-medium mb-2">👸🏻 Storytelling</h3>
              <p className="leading-relaxed text-base">
                <span className="italic">Il était une fois ...</span> Oui mais non. Si cette méthode sert effectivement à narrer une histoire dans le but de créer un lien avec son lectorat, il faut tout de même que cela soit fait avec originalité et honnêteté.
              </p>
            </div>
          </div>
          {/* Ghostwriting */}
          <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col" data-aos="zoom-in-up" data-aos-delay="75"
     data-aos-duration="500">
            <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full  text-purple-500 flex-shrink-0 shadow-xl">
              <img
                src={require("../assets/portable.png")}
                alt="logo ghostwriting"
                className="w-2/4"
              />
            </div>
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-orange-s text-2xl title-font font-medium mb-2">
                Réécrire ?
              </h2>
              <h3 className="text-blue-s text-xl title-font font-medium mb-2">👻 Ghostwriting</h3>
              <p className="leading-relaxed text-base">
                Pas de fantôme ici, ne craignez rien. Le ghostwriting désigne la compétence, pour un auteur, de réécrire à la place de celui qui ne trouve pas les mots. Biographie, récit ou même thèse universitaire, multiples sont les cas de figure où l'on aurait bien besoin d'un petit coup de plume !
              </p>
            </div>
            
          </div>

          

          
        </div>
      </section>

      <div></div>
    </div>
  );
};

export default Techniques;

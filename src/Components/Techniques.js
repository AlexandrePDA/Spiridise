import React from "react";
import woman from "../assets/woman-second-block.svg";
import Typewriter from "typewriter-effect";




const Techniques = () => {
  return (
    <div id="offres" className="flex flex-col mt-12 pt-12 justify-center items-center">
      <div className="hidden lg:flex items-center justify-center lg:mr-10">
        <img
          src={woman}
          alt="woman offres"
          className="hidden md:z-[-10] lg:inline md:scale-x-[-1] md:w-6/12 md:max-w-xl"
        />
        <div className="flex flex-col">
          <h2 className="text-5xl hidden text-white bg-orange-s z-[-100] w-95 lg:text-6xl lg:inline">
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
            <h3 className="text-3xl lg:text-4xl text-center font-semibold text-gray-600 mx-2 lg:text-left lg:mx-0 ">
              Retrouvez nos solutions digitales dédiées 🚀
            </h3>
            <h3 className="text-xl mt-4 text-center text-grey-subtitle-s lg:text-left lg:text-2xl">Votre objectif est de :</h3>

          </div>
        </div>
      </div>

          {/* Mobile */}
      <div className="lg:hidden mt-10">
            <h2 className="text-2xl text-center mx-2 font-semibold text-gray-600">
              Une offre <span className="bg-orange-s rounded-lg font-semibold px-3 py-1 text-white">sur-mesure</span>
            </h2>
            <h2 className="text-2xl font-semibold text-center  text-gray-600">
              Pour chacun de vos projets 🚀
            </h2>
            <h3 className="text-xl mt-4 text-center text-grey-subtitle-s">Retrouvez nos solutions digitales dédiées</h3>
            <h4 className="text-center text-xl text-grey-subtitle-s" >Votre objectif est de :</h4>

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
                Utilisé dans les domaines du marketing de contenu et de la publicité digitale, le copywriting consiste à persuader ses prospects de passer à l'action.
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
                Aussi connu sous le nom de référencement naturel, l'optimisation SEO vise à améliorer le positionnement d'un site web afin de lui permettre d'atteindre le Graal : la première page des résultats.
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
                Cette technique généraliste permet de désigner tout type de rédaction utilisée sur le web. Elle est souvent à visée didactique, c'est-à-dire qu'elle cherche à instruire le lecteur (un peu comme maintenant).
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
                <span className="italic">Il était une fois ...</span> Oui mais non. Si cette méthode sert à conter, elle doit le faire avec originalité et honnêteté. Bien amenée, la rédaction créative nourrit l'image de votre marque. Car cette histoire, c'est la vôtre. 
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
                Pas de fantôme ici, ne craignez rien. Le ghostwriting désigne la compétence, pour un auteur, d'écrire à la place de celui qui ne trouve pas les mots. Biographie, récit ou même thèse universitaire, multiples sont les cas de figure où l'on aurait bien besoin d'un petit coup de plume !
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

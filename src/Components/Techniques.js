import React from "react";
import woman from "../assets/woman-second-block.svg";
import Typewriter from "typewriter-effect";




const Techniques = () => {
  return (
    <div id="offres" className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center lg:mr-10">
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
                  .start();
              }}
              options={{
                loop: true,
              }}
            />
          </h2>
          <div>
            <h3 className="text-xl text-center mx-2 lg:text-left lg:mx-0 lg:text-4xl">
              Des offres sur mesures
            </h3>
            <h4 className="text-xl text-center lg:text-left lg:text-4xl">
              Pour vous 🚀
            </h4>
          </div>
        </div>
      </div>

      <section className="text-gray-600 body-font z-[-25]" >
        <div className="container px-5 py-24 mx-auto">
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
              <h3 className="text-blue-s text-xl title-font font-medium mb-2">👉 Copywriting</h3>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
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
              <h3 className="text-blue-s text-xl title-font font-medium mb-2">👉 SEO</h3>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
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
              <h3 className="text-blue-s text-xl title-font font-medium mb-2">👉 Rédaction web</h3>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
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
              <h3 className="text-blue-s text-xl title-font font-medium mb-2">👉 Storytelling</h3>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
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
              <h3 className="text-blue-s text-xl title-font font-medium mb-2">👉 Ghostwriting</h3>
              <p className="leading-relaxed text-base">
                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                taxidermy. Gastropub indxgo juice poutine.
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

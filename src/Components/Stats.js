import React from "react";
import CountUp from 'react-countup';

const Stats = () => {

  

  return (
    <section class="text-gray-600 body-font z-[-20]">
      <div class="container px-5 pb-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h2 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Des chiffres et des lettres
          </h2>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Si c'est grâce aux lettres et à notre créativité que nous vous accompagnons, <br/> nous pensons tout de même aux plus pragmatiques d'entre vous. <br/> Quelques chiffres utiles pour apprécier nos réalisations :
          </p>
        </div>
        <div class="flex flex-wrap -m-4 text-center">

          
          <div class="p-4 md:w-1/4 sm:w-1/2 w-full z-[-20]" data-aos="zoom-in"
              data-aos-delay="50">
            <div class="border-2 flex justify-center items-center  border-gray-100 px-4 py-6 h-52 rounded-lg shadow-lg">
              <div className="flex-col">
              <h2 class="title-font font-medium text-3xl text-gray-900">
                +
              <CountUp duration={2} end={500} scrollSpyDelay={8} scrollSpyOnce={true}/>
                K
              </h2>
              <p class="leading-relaxed">Mots rédigés 💬</p>

              </div>
              
            </div>
          </div>


          <div
            class="p-4 md:w-1/4 sm:w-1/2 w-full z-[-20]"
            data-aos="zoom-in"
              data-aos-delay="50"
          >
            <div class="border-2 flex justify-center items-center border-gray-100 px-4 py-6 h-52 rounded-lg shadow-lg">
              <div>
              
              <h2 class="title-font font-medium text-3xl text-gray-900"><CountUp duration={2} delay={1} end={50} /></h2>
              <p class="leading-relaxed">Collaborations 👥</p>

              </div>
            </div>
          </div>


          <div
            class="p-4 md:w-1/4 sm:w-1/2 w-full z-[-20]"
            data-aos="zoom-in"
              data-aos-delay="50"
          >
            <div class="border-2 flex justify-center items-center border-gray-100 px-4 py-6 h-52 rounded-lg shadow-lg">
             <div>
              <h2 class="title-font font-medium text-3xl text-gray-900"><CountUp duration={2} delay={1} end={15} /></h2>
              <p class="leading-relaxed">Sujets couverts 📚</p>

             </div>
            </div>
          </div>

          


          <div
            class="p-4 md:w-1/4 sm:w-1/2 w-full z-[-20]"
            data-aos="zoom-in"
              data-aos-delay="50"
          >
            <div class="border-2 flex justify-center items-center border-gray-100  h-52 px-4 py-6 rounded-lg shadow-lg">
             <div>

              <h2 class="title-font font-medium text-3xl text-gray-900"><CountUp duration={2} delay={1} end={3} /></h2>
              <p class="leading-relaxed">Langues maîtrisées 🗣️</p>

             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;

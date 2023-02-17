import React from "react";
import styled from "styled-components";
import { keyframes } from "styled-components";

const test = () => {

    const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
    const AnimatedGradientText = styled.h1`
    color: white;
    background-image: -webkit-linear-gradient(10deg, #33C2FF, #FFB433);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-animation: ${hue} 5s infinite linear;
    overflow-wrap: break-word;
    text-align: center;
    text-rendering: optimizelegibility;
    -moz-osx-font-smoothing: grayscale;
  `;

  return (
    <section
      id="accueil"
      className="text-gray-600  w-screen lg:h-3/6 mt-24 lg:mt-16 "
    >
      <div>
        <div className="flex items-center justify-center flex-col w-full lg:h-[32rem] ">
          <div className="max-w-xl">
            <div className="text-6xl flex text-center font-anton font-bold leading-relaxed lg:flex-row flex-col text-gray-800  ">
              <div className="">
              <AnimatedGradientText>IMAGINER.</AnimatedGradientText>             
               </div>
              <div className="lg:ml-4"> DÉVELOPPER.</div>
              <div className="lg:ml-4"> CRÉER.</div>
            </div>

            <p className="mt-4 text-sm text-gray-500  lg:text-base">
              Profitez d'une véritable expertise dans le domaine de la
              communication écrite : Spridise offre des solutions innovantes
              pour améliorer votre branding et accroître votre visibilité
              digitale.
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
      </div>
    </section>
  );
};

export default test;

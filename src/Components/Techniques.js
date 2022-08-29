import React from "react";
import woman from "../assets/woman-second-block.svg";
import Typewriter from "typewriter-effect";



const offres = [
  {
    name: "Copywriting",
    img: require("../assets/copy.png"),
    text: "lLorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt autem libero quis ",
  },
  {
    name: "Storytelling",
    img: require("../assets/story.png"),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt autem libero.",
  },
  {
    name: "Ghostwriting",
    img: require("../assets/ghost.png"),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ",
  },
];

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
              <div className="">

          <h3 className="text-xl text-center mx-2 lg:text-left lg:mx-0 lg:text-4xl">Des offres sur mesures</h3>
          <h4 className="text-xl text-center lg:text-left lg:text-4xl">Pour vous 🚀</h4>
              </div>
        </div>
      </div>

      <div className="flex z-[-10] flex-col gap-x-8 lg:flex-row w-2/3 mb-12">
        {offres.map((offre, index) => (
          <ul key={index}>
            <li className="flex p-4 mb-8 flex-col items-center justify-center gap-y-4 rounded-lg shadow-lg bg-grey-s" data-aos="zoom-in"
              data-aos-delay="50">
              <img
                src={offre.img}
                alt="logos offres"
                className="w-18 h-14 mb-1"
              />
              <div className="flex flex-col items-center justify-start text-center">
                <h3 className="font-bold text-xl mb-2">{offre.name}</h3>
                <p>{offre.text}</p>
              </div>
            </li>
          </ul>
        ))}
      </div>

      <div>
        
      </div>


    </div>
  );
};

export default Techniques;

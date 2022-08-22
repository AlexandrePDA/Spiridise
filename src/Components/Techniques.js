import React from "react";
import woman from "../assets/woman-second-block.svg";

const offres = [
  {
    name: "Copywritting",
    img: require("../assets/copy.png"),
    text: "lLorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt autem libero quis ",
  },
  {
    name: "Storytelling",
    img: require("../assets/story.png"),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt autem libero.",
  },
  {
    name: "Ghostwritting",
    img: require("../assets/ghost.png"),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ",
  },
];

const Techniques = () => {
  return (
    <div id="offres" className="flex flex-col items-center">
      <h2 className="font-bold text-3xl">Solutions</h2>
      <div className="flex items-center justify-center">

      <img
        src={woman}
        alt="woman offres"
        className="hidden md:z-[-10] lg:inline md:scale-x-[-1] md:w-6/12 md:max-w-xl"
      />

      <div className="flex flex-col">
        {offres.map((offre, index) => (
          <ul key={index}>
            <li className="flex flex-col items-center justify-center md:max-w-lg  md:justify-start md:flex-row">
              <img
                src={offre.img}
                alt="logos offres"
                className="w-16 mr-7 mb-7"
              />
              <div className="flex flex-col items-center justify-start md:inline">
                <h3 className="font-bold">{offre.name}</h3>
                <p>{offre.text}</p>
              </div>
            </li>
          </ul>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Techniques;

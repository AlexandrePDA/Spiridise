import React from "react";

const crea = [
  {
    name: "Recherches",
    img: require("../assets/world.png"),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt",
  },
  {
    name: "Rédaction",
    img: require("../assets/pinceau.png"),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt",
  },
  {
    name: "Envoi/Intégration",
    img: require("../assets/envoi.png"),
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt",
  },
];

const Creations = () => {
  return (
    <div id="creations" className="flex flex-col items-center justify-center">
      <h2 className="text-3xl mb-8 ">Parcours Création</h2>

      <div className="flex z-[-10] flex-col gap-x-8 lg:flex-row w-2/3 h-50 mb-12">
        {crea.map((item, index) => (
          <ul key={index}>
            <li
              className="flex p-4 mb-8 flex-col items-center justify-center h-full gap-y-4 rounded-lg shadow-lg bg-grey-s"
              data-aos="zoom-in"
              data-aos-delay="50"
            >
              <img
                className="w-18 h-14 mb-1"
                src={item.img}
                alt="logo etape creations"
              />
              <div className="flex flex-col items-center justify-start text-center">
                <h3 className="font-bold text-xl mb-2">{item.name}</h3>
                <p className="">{item.text}</p>
              </div>
            </li>
          </ul>
        ))}
      </div>

      <svg
        className="w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#91a7e3"
          fill-opacity="1"
          d="M0,64L80,58.7C160,53,320,43,480,69.3C640,96,800,160,960,154.7C1120,149,1280,75,1360,37.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Creations;

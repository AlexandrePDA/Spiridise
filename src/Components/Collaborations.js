import React from 'react';
import { useState , useEffect, useRef } from 'react';


const logosMarques = [
    {
    name: "shine",
    img: require("../assets/logos-marques/shine.png")
    },
    {
      name: "adeo",
      img: require("../assets/logos-marques/adeo.png")
    },
    {
      name: "arsen",
      img: require("../assets/logos-marques/arsen.png")
    },
    {
      name: "mozaikrh",
      img: require("../assets/logos-marques/mozaikrh.png")
    },
    {
      name: "leroymerlin",
      img: require("../assets/logos-marques/leroymerlin.png")
    },
    {
      name: "blueCoders",
      img: require("../assets/logos-marques/bluecoders.png")
    },
];
const delay = 1500;

const Collaborations = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }



  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === logosMarques.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);


  return (
    <div className="mx-auto w-1/2 overflow-hidden md:w-1/4 md:mx-2/5 bg-slate-600">
      <div
        className="whitespace-nowrap duration-1000 "
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {logosMarques.map((logo, index) => (
          <ul
            className="inline-block w-full"
            key={index}
          >
            <li>
            <img className="" src={logo.img} alt="" />
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Collaborations;
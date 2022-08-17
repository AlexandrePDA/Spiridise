import React from 'react';
import { useState , useEffect, useRef } from 'react';

const logosMarques = [
    {
    name: "shine",
    img: "../assets/logos-marques/shine.png"
    },
    {
      name: "adeo",
      img: "../assets/logos-marques/adeo.png"
    },
    {
      name: "arsen",
      img: "../assets/logos-marques/arsen.png"
    },
    {
      name: "mozaikrh",
      img: "../assets/logos-marques/mozaikrh.png"
    },
    {
      name: "leroymerlin",
      img: "../assets/logos-marques/leroymerlin.png"
    },
    {
      name: "blueCoders",
      img: "../assets/logos-marques/bluecoders.png"
    },
];
const delay = 1400;

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
    <div className="mx-auto overflow-hidden w-1/2">
      <div
        className="whitespace-nowrap duration-1000"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {logosMarques.map((logo, index) => (
          <ul
            className="inline-block h-48 w-full rounded"
            key={index}
          >
            <li>
            {/* <img src={require('../assets/logos-marques/' + logo.name + '.png')} alt="" /> */}
            <p>{logo.name}</p>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Collaborations;
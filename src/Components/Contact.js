import React from "react";
import malt from "../assets/maltlogo.png";
import linkedin from "../assets/linkedin-logo.png";

const Contact = () => {
  return (
    <div id="contact" className="pb-10">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#91a7e3"
          fill-opacity="1"
          d="M0,192L80,197.3C160,203,320,213,480,186.7C640,160,800,96,960,80C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>

      <div className="w-9/12 mx-auto rounded-xl shadow-lg bg-grey-s md:w-1/2">
        <div className="flex flex-col items-center">
          <h3 className="mt-4 text-lg mb-4 p-4 text-center">
            Créons ensemble le projet qui vous ressemble
          </h3>
          <p>Amel Addoun</p>
          <div className="flex gap-x-2 items-center">
          <ion-icon name="mail-unread-outline"></ion-icon>
          <a href="mailto:contact@spiridise.com">
            contact@spiridise.com
          </a>
          </div>
          <div className="flex gap-x-2 items-center">
            <ion-icon name="call-outline"></ion-icon>
            <p> 06.61.01.59.72</p>
          </div>
          <div className="flex gap-x-2 mt-6 mb-8">
            <a href="https://www.malt.fr/profile/ameladdoun">
              <img
                src={malt}
                alt="logo malt"
                className=" rounded-xl transition-all duration-300 w-8 hover:scale-110"
              />
            </a>
            <a href="https://www.linkedin.com/in/amel-addoun-84a13519a">
              <img
                src={linkedin}
                alt="logo linkedin"
                className="rounded transition-all duration-300 w-8 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

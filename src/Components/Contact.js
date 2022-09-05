import React from "react";
import calendly from "../assets/calendlylogo.png";

const Contact = () => {
  return (
    <div id="contact" className="pb-10">
      

      <div className="w-9/12 mx-auto rounded-xl shadow-lg bg-white md:w-1/2">
        <div className="flex flex-col items-center">
          <h3 className="mt-4 text-lg mb-2 p-4 text-center">
            Créons ensemble le projet qui vous ressemble
          </h3>
          <p>Lorem ipsum Lorem ipsum</p>
          
          <p className="mb-2">Prenons rendez-vous et échangeons !</p>
          <a href="https://calendly.com/amel-addoun/30min" className="mb-4">

          <img src={calendly} alt="calendly logo" className="w-28 transition-all duration-300 hover:scale-110" />
          </a>
          <p>Amel Addoun</p>
          <div className="flex gap-x-2 items-center">
          <ion-icon name="mail-unread-outline"></ion-icon>
          <a href="mailto:contact@spiridise.com">
            contact@spiridise.com
          </a>
          </div>
          <div className="flex gap-x-2 items-center mb-6">
            <ion-icon name="call-outline"></ion-icon>
            <p> 06.61.01.59.72</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

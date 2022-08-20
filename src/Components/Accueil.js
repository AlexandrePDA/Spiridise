import React from 'react';
import picwoman from '../assets/woman-first-block.svg'

const Accueil = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center md:flex-row-reverse md:justify-between md:w-4/5 md:mx-auto">
            <img src={picwoman} alt="marketing digital" className="max-w-sm md:w-6/12 md:max-w-xl" />
            <div className="flex flex-col items-center justify-center md:ml-8">
            <h1 className="font-dosis font-bold text-4xl md:w-6/12">
                Spiridise
            </h1>
            <h2 className="font-dosis font-bold text-2xl md:w-6/12">Votre rédacteur web</h2>
            <p className="w-1/2 md:w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt autem libero quis porro corporis in sed amet atque cupiditate.</p>
            </div>
        </div>
    );
};

export default Accueil;
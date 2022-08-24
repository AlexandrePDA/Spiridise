import React from 'react';
import picwoman from '../assets/woman-first-block.svg';
import CountUp from 'react-countup';

const Accueil = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center md:flex-row-reverse md:w-4/5 md:mx-auto">
            <img src={picwoman} alt="marketing digital" className="max-w-xs md:w-6/12 md:max-w-xl" />

            <div className="flex flex-col items-center justify-center md:inline-block md:ml-8">
            <h1 className=" font-bold text-4xl">
                SPIRIDISE
            </h1>
            <h2 className="font-bold text-2xl md:w-6/12">Votre rédacteur web</h2>
            <p className="w-1/2 md:w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias incidunt autem libero quis porro corporis in sed amet atque cupiditate.</p>
            <p className="h-12 mt-3 w-2/3 flex items-center rounded-xl p-4 text-white bg-slate-400">+<CountUp className="text-xl" duration={2} delay={1} end={100000} />mots sur internet</p>
            <p className="h-12 mt-3 w-2/3 flex items-center rounded-xl p-4 text-white bg-slate-400">+<CountUp className="text-xl" duration={2} delay={1} end={40} />collaborations</p>

            </div>
        </div>
    );
};

export default Accueil;
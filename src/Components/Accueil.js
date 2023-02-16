import React from "react";


const Accueil = () => {
  return (
    <section id="accueil" className="text-gray-600 body-font mt-20 lg:mt-0 ">
       <div className="lg:flex">
        <div className="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
            <div className="max-w-xl">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Build Your New <span className="text-blue-600 dark:text-blue-400">Idea</span></h2>

                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 lg:text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis commodi cum cupiditate ducimus, fugit harum id necessitatibus odio quam quasi, quibusdam rem tempora voluptates.</p>

                <div className="flex flex-col -z-50 mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                    <a href="#contact" className="block -z-50 px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700">Get Started</a>
                    <a href="#presentation" className="block -z-50 px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300">Learn More</a>
                </div>
            </div>
        </div>

        <div className="w-full -z-10 h-64 lg:w-1/2 lg:h-auto">
            <div className="w-full -z-10 h-full bg-cover" >
                <div className="w-full -z-10 h-full bg-black opacity-25"></div>
            </div>
        </div>
    </div>
    </section>
  );
};

export default Accueil;

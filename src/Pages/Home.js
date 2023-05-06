import React from 'react';
import Header from '../Components/Header.js'
import Accueil from '../Components/Accueil'
import Collaborations from '../Components/Collaborations'
import Techniques from '../Components/Techniques.js';
import Creations from '../Components/Creations.js';
import Presentations from "../Components/Presentations"
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Stats from '../Components/Stats'
import Faq from '../Components/Faq.js';
import Test from '../Components/Test.js';





const Home = () => {
    return (
        <div className="font-montserrat overflow-x-hidden">
            <Header/>
            <div className="2xl:hidden flex justify-center opacity-70 mx-auto mt-[-2rem]">
            <Test/>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="w-12 h-12 2xl:hidden flex justify-center opacity-70 mx-auto mt-[-2rem] element">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

            <Accueil/>
            <Collaborations/> 
            <Techniques />
            <Stats />
            <Creations />
            <Presentations />
            <Contact />
            <Faq />
            
            <Footer />
        </div>
    );
};

export default Home;
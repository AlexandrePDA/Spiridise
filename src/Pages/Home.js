import React from 'react';
import Header from '../Components/Header.js'
import Accueil from '../Components/Accueil'
import Collaborations from '../Components/Collaborations'
import Techniques from '../Components/Techniques.js';
import Creations from '../Components/Creations.js';
import Presentations from "../Components/Presentations"
import Contact from '../Components/Contact';


const Home = () => {
    return (
        <div className="font-montserrat overflow-x-hidden">
            <Header/>
            <Accueil/>
            <Collaborations/> 
            <Techniques />
            <Creations />
            <Presentations />
            <Contact />
        </div>
    );
};

export default Home;
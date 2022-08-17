import React from 'react';
import Header from '../Components/Header.js'
import Accueil from '../Components/Accueil'
import Collaborations from '../Components/Collaborations'

const Home = () => {
    return (
        <div>
            <Header/>
            <Accueil/>
            <Collaborations/>
        </div>
    );
};

export default Home;
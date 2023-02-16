import React from 'react';
import { useState } from 'react';

const Faq = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);



    return (
        
        
        <section className="bg-white dark:bg-gray-900 mt-40">
          
    <div className="container max-w-4xl px-6 py-10 mx-auto">
        <h2 className="text-xl font-semibold text-center text-gray-800 lg:text-5xl dark:text-white">FAQ 💡</h2>
    

        <div className="mt-12 space-y-8">
            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                <button className="flex items-center justify-between w-full p-8" onClick={() => setOpen1(!open1)}>
                    <h1 className="font-semibold text-gray-700 dark:text-white">J'ai un projet, comment on fait ?</h1>

                    
                    
                    {open1? <span className="text-gray-400 bg-gray-200 rounded-full" ><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                        </svg></span> : <span className="text-white bg-blue-s rounded-full" ><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg></span> }
                        
                    
                </button>

                
                {open1? <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    Si vous disposez d'un cahier des charges, vous me partager les détails de votre projet. Au contraire, si votre idée est encore floue, nous pouvons la travailler ensemble. Dans les deux cas, nous en discutons ensemble autour d'un appel, d'un visio, d'un mail ou d'un café. Je réalise ensuite le devis selon les termes convenus, et l'aventure peut commencer ! 🚀 
                </p> : ""}
                
            </div>

            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                <button className="flex items-center justify-between w-full p-8" onClick={() => setOpen2(!open2)}>
                    <h1 className="font-semibold text-gray-700 dark:text-white">Combien coûte la rédaction d'un article ?</h1>

                    
                    {open2? <span className="text-gray-400 bg-gray-200 rounded-full" ><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                        </svg></span> : <span className="text-white bg-blue-s rounded-full" ><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg></span> }
                </button>

                
                {open2?  <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    La tarification varie en fonction d'un certain nombre de paramètres : longueur, complexité du sujet, nature de la cible ... 
                    N'hésitez pas à me contacter pour bénéficier d'un devis personnalisé. 
                </p> : ""}
                
            </div>
 

            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                <button className="flex items-center justify-between w-full p-8" onClick={() => setOpen3(!open3)}>
                    <h1 className="font-semibold text-gray-700 dark:text-white">Dans combien de temps aurais-je mon livrable ?</h1>

                    
                    {open3? <span className="text-gray-400 bg-gray-200 rounded-full" ><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                        </svg></span> : <span className="text-white bg-blue-s rounded-full" ><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg></span> }
                </button>

                
                {open3? <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
Vos livrables vous sont envoyés à la date convenue lors du devis. Des envois intermédiaires sont prévus tout au long de la mission afin d'assurer un suivi constant. </p> : ""}
                
            </div>


           



            
        </div>
    </div>
</section>
        
    );
};

export default Faq;
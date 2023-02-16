import React from "react";


const Presentations = () => {
  return (

    <section id="presentations">
  <div className="mx-auto  -z-10 max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 -z-10 lg:h-screen lg:grid-cols-2">
      <div className="relative -z-10 lg:py-16">
        <div className="relative h-64 shadow-xl  sm:h-80 lg:h-full">
          <img
            alt="House"
            src={require("../assets/photo-profil.jpg")}            className="absolute inset-0 h-full w-full object-cover "
          />
        </div>
      </div>

      <div className="relative shadow-lg flex items-center -z-50 bg-gray-100">
        <span
          className="hidden lg:absolute -z-50 lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"
        ></span>

        <div className="p-8 -z-50 sm:p-16 lg:p-24">
          <h2 className="text-2xl -z-50 font-bold sm:text-3xl">
           Derrière Spiridise, l'envie de rendre accessible le pouvoir des mots bien choisis 🚀

          </h2>

          <p className="mt-4 -z-50 text-gray-600 text-justify">
Biberonnée au plaisir des belles lettres, j'ai toujours aimé être au service des mots. Cela fait plus de trois (belles) années que j’ai décidé d’ouvrir Spiridise, la solution rédaction pour les entreprises qui visent à étendre leur visibilité sur le web.<br/>
Après un parcours universitaire naturellement orienté vers une licence de Lettres Modernes puis un Master II de Science Politique, j'ai pu développer mes compétences rédactionnelles, mon esprit critique et mes capacités analytiques.<br/>
Aujourd’hui, j’accompagne des entreprises quotidiennement dans le but de développer leur image de marque et de les aider à transmettre les messages qui leur tiennent à cœur. 


          </p>

          <a
            href="#contact"
            className="mt-8 -z-50 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  </div>
</section>





      /*
    <div id="presentations" class="bg-white dark:bg-gray-900">
    <div class="container px-4 py-10 mx-auto">
        <div class=" flex items-center justify-center  flex-col lg:flex-row">

            <img class="object-cover object-center  lg:mx-6 md:w-1/5 md:h-full rounded-3xl " src={require("../assets/photo-profil.jpg")} alt="" />
          

            <div class="mt-8  lg:w-1/2 lg:px-6 lg:mt-0">
                

                <h1 class="text-xl font-semibold text-gray-800 dark:text-white xl:text-4xl ">
                <span class="text-3xl font-semibold text-blue-s mr-8">«</span>
                    Derrière Spiridise, une envie : accompagner des entreprises innovantes dans leur stratégie de communication virtuelle pour leur permettre de se concentrer sur le réel.
                    <span class="text-3xl font-semibold text-blue-s ml-8">»</span>
                </h1>
                

                <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                Ça, c’est moi.
Vous vous demandez comment j’en suis arrivée là ? C’est une drôle d’histoire que vais vous présenter, car après tout, nous sommes intimes maintenant.
Moi, c’est Amel. 
Biberonnée au plaisir des belles lettres, j'ai toujours aimé être au service des mots. Cela fait plus de deux (belles) années que j’ai décidé d’ouvrir Spiridise, la solution rédaction pour les entreprises qui visent à étendre leur visibilité sur le web. Après un parcours universitaire naturellement orienté vers une licence de Lettres Modernes puis un Master II de Science Politique, j'ai pu développer mes compétences rédactionnelles, mon esprit critique et mes capacités analytiques.   
Aujourd’hui, j’œuvre chaque jour pour accompagner des entreprises à impact à développer leur image de marque, améliorer leur référencement et transmettre les messages qui leur tiennent à cœur. 



                </p>
                
                <h3 class="mt-6 text-lg font-medium text-blue-s">Amel Addoun</h3>
                <p class="text-gray-600 dark:text-gray-300">Spiridise</p>
            

                
            </div>
            
        </div>
        <p class=" text-gray-500 dark:text-gray-400 ">
        Si vous voulez participer à la suite de cette belle histoire, n’hésitez pas à prendre contact avec moi afin que nous échangions au sujet de votre projet. 
        </p>

     
                
    </div>
</div>*/
  );
};

export default Presentations;

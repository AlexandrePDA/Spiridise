import React from "react";


const Presentations = () => {
  return (
    <div id="presentations" class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-10 mx-auto">
        <div class=" flex items-center justify-center  flex-col lg:flex-row">

            <img class="object-cover object-center  lg:mx-6 md:w-1/5 md:h-full rounded-3xl " src={require("../assets/photo-profil.jpg")} alt="" />
          

            <div class="mt-8  lg:w-1/2 lg:px-6 lg:mt-0">
                

                <h1 class="text-2xl font-semibold text-gray-800 dark:text-white xl:text-4xl ">
                <span class="text-5xl font-semibold text-blue-s mr-8">«</span>
                    Derrière Spiridise, une envie : accompagner des entreprises innovantes dans leur stratégie de communication virtuelle pour leur permettre de se concentrer sur le réel.
                    <span class="text-5xl font-semibold text-blue-s ml-8">»</span>
                </h1>
                

                <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad
                    tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda rerum, culpa
                    aperiam dolorum, obcaecati corrupti aspernatur a. 
                </p>

                <h3 class="mt-6 text-lg font-medium text-blue-s">Amel Addoun</h3>
                <p class="text-gray-600 dark:text-gray-300">Spiridise</p>
                
            

                
            </div>
        </div>
    </div>
</div>
  );
};

export default Presentations;

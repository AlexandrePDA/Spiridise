import React from "react";



const Creations = () => {
  return (
   

    <section id="creations" class="text-gray-600 body-font">
    <h2 className="text-center">Parcours</h2>
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    
    {/* Brief */}
    <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto z-[-20]">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-s text-white relative z-10 title-font font-medium text-sm">1</div>
      <div class="flex-grow md:pl-8 pl-6 flex  sm:items-center items-start flex-col sm:flex-row" data-aos="zoom-in-up" data-aos-delay="75">
        <div class="flex-shrink-0 w-24 h-24 shadow-xl border  border-gray-100 rounded-full inline-flex items-center justify-center">
          <img src={require("../assets/Brief.png")} alt="logo recherches" className="w-2/4"/>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Brief</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>

    {/* Recherches */}
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto z-[-20]">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-s text-white relative z-10 title-font font-medium text-sm">2</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row" data-aos="zoom-in-up" data-aos-delay="75">
        <div class="flex-shrink-0 w-24 h-24 border border-gray-100 shadow-xl text-purple-500 rounded-full inline-flex items-center justify-center">
          <img src={require("../assets/world.png")} alt="logo redaction" className="w-2/4"/>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Recherche</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>

    {/* Rédaction */}
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto z-[-20]">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-s text-white relative z-10 title-font font-medium text-sm">2</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row" data-aos="zoom-in-up" data-aos-delay="75">
        <div class="flex-shrink-0 w-24 h-24 border border-gray-100 shadow-xl text-purple-500 rounded-full inline-flex items-center justify-center">
          <img src={require("../assets/pinceau.png")} alt="logo redaction" className="w-2/4"/>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Rédaction</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>

    {/* Livraison */}
    <div class="flex relative pb-20 sm:items-center md:w-2/3 mx-auto z-[-20]">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-s text-white relative z-10 title-font font-medium text-sm">3</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row" data-aos="zoom-in-up" data-aos-delay="75">
        <div class="flex-shrink-0 w-24 h-24 border border-gray-100 shadow-xl text-purple-500 rounded-full inline-flex items-center justify-center">
         <img src={require("../assets/envoi.png")} alt="logo livraison" className="w-2/4" />
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Livraison</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>

    {/* Retouches */}
    <div class="flex relative pb-10 sm:items-center md:w-2/3 mx-auto z-[-20]">
      <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-orange-s text-white relative z-10 title-font font-medium text-sm">4</div>
      <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row" data-aos="zoom-in-up" data-aos-delay="75">
        <div class="flex-shrink-0 w-24 h-24 border border-gray-100 shadow-xl text-purple-500 rounded-full inline-flex items-center justify-center">
          <img src={require("../assets/retouches.png")} alt="logo retouches" className="w-2/4"/>
        </div>
        <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 class="font-medium title-font text-gray-900 mb-1 text-xl">Retouches</h2>
          <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
        </div>
      </div>
    </div>
  </div>

</section>
  );
};

export default Creations;

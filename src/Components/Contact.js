import React from "react";
// import calendly from "../assets/calendlylogo.png";
// import malt from "../assets/maltlogo.png";
// import linkedin from "../assets/linkedin-logo.png";

const Contact = () => {
  return (

    <section id="contact" class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-12 mt-5 mx-auto">
        <div>
            <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">C'est le <span className="bg-orange-s rounded-lg font-bold px-3 py-1 text-white">moment</span> de faire connaissance 🤝</h1>

            <p class="mt-3 text-gray-500 dark:text-gray-400">Our friendly team is always here to chat.</p>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div class="p-4 rounded-lg border-b-4 border-orange-s shadow-xl md:p-6 dark:bg-gray-800">
                <span class="inline-block p-3  rounded-lg bg-blue-100/80 dark:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </span>

                <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Chat to sales</h2>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Speak to our friendly team.</p>
                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">hello@merakiui.com</p>
            </div>

            <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                </span>
                
                <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Chat to support</h2>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">We’re here to help.</p>
                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">Start new chat</p>
            </div>

            <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                </span>
                
                <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Visit us</h2>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Visit our office HQ..</p>
                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">100 Smith Street Collingwood VIC 3066 AU</p>
            </div>

            <div class="p-4 rounded-lg bg-blue-50 md:p-6 dark:bg-gray-800">
                <span class="inline-block p-3 text-blue-500 rounded-lg bg-blue-100/80 dark:bg-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </span>
                
                <h2 class="mt-4 text-base font-medium text-gray-800 dark:text-white">Call us</h2>
                <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">+1 (555) 000-0000</p>
            </div>
        </div>
    </div>
</section>




    // <div id="contact" className="pb-10">

    //   <div className="w-9/12 mx-auto rounded-xl shadow-lg bg-white md:w-1/2">
    //     <div className="flex flex-col items-center">
    //       <h3 className="mt-4 text-lg mb-2 p-4 text-center">
    //         Un devis ? Une question ? Une remarque ?
    //       </h3>
    //       <p>Lorem ipsum Lorem ipsum</p>
    //       <div className="flex gap-x-2 mt-2 mb-8">
    //             <a href="https://www.malt.fr/profile/ameladdoun">
    //           <img
    //             src={malt}
    //             alt="logo malt"
    //             className=" rounded-xl transition-all duration-300 w-8 hover:scale-110"
    //           />
    //         </a>
    //         <a href="https://www.linkedin.com/in/amel-addoun-84a13519a">
    //           <img
    //             src={linkedin}
    //             alt="logo linkedin"
    //             className="rounded w-8  transition-all duration-300 hover:scale-110"
    //           />
    //         </a>
    //         </div>
    //       <p className="mb-2">Prenons rendez-vous et échangeons !</p>
    //       <a href="https://calendly.com/amel-addoun/30min" className="mb-4">

    //       <img src={calendly} alt="calendly logo" className="w-28 transition-all duration-300 hover:scale-110" />
    //       </a>
    //       <p>Amel Addoun</p>
    //       <div className="flex gap-x-2 items-center">
    //       <ion-icon name="mail-unread-outline"></ion-icon>
    //       <a href="mailto:contact@spiridise.com">
    //         contact@spiridise.com
    //       </a>
    //       </div>
    //       <div className="flex gap-x-2 items-center mb-6">
    //         <ion-icon name="call-outline"></ion-icon>
    //         <p> 06.61.01.59.72</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //<div id="contact">
     // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
       // <path
         // fill="#91a7e3"
          //fill-opacity="1"
          //d="M0,160L80,144C160,128,320,96,480,106.7C640,117,800,171,960,186.7C1120,203,1280,181,1360,170.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        //></path>
      //</svg>
    
      
   // </div>
  );
};

export default Contact;

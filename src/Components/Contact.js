import React from "react";


const Contact = () => {
  return (

    <section id="contact" className="bg-white mt-20 mb-10  dark:bg-gray-900">
    <div className="container   md:rounded-lg md:shadow-2xl px-6 py-12 mt-5 mx-auto">
        <div>
            <h2 className="mt-2 text-2xl text-center font-semibold text-gray-800 md:text-3xl dark:text-white">C'est le <span className="bg-orange-s rounded-lg font-bold px-3 py-1 text-white">moment</span> de faire connaissance 🤝</h2>

        </div>
        <div className="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">


          
            <div className="p-4 rounded-lg shadow-xl bg-grey-s  md:p-6 dark:bg-gray-800" data-aos="zoom-in-up" data-aos-delay="75"
     data-aos-duration="400">
            <img src={require("../assets/gmail.png")} alt="logo moraikrh" className="h-8 w-8 rounded"/>


                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Pour se renseigner</h2>
  
                <a className="mt-2 text-sm text-blue-500 dark:text-blue-400 cursor-pointer hover:text-orange-s" href="mailto:contact@spiridise.com">Envoyez un email</a>
            </div>



            <div className="p-4 rounded-lg shadow-xl bg-grey-s  md:p-6 dark:bg-gray-800" data-aos="zoom-in-up" data-aos-delay="85"
     data-aos-duration="800">
            <svg className="w-8 h-8 text-blue-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                </path>
            </svg>
                
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Pour un premier contact</h2>
                <a className="mt-2 text-sm text-blue-500 dark:text-blue-400 cursor-pointer hover:text-orange-s" href="https://www.linkedin.com/in/amel-addoun-84a13519a"> Rejoignez-moi sur Linkedin</a>
            </div>



            <div className="p-4 rounded-lg shadow-xl bg-grey-s   md:p-6 dark:bg-gray-800" data-aos="zoom-in-up" data-aos-delay="95"
     data-aos-duration="1200">
            <img src={require("../assets/maltlogo.png")} alt="logo malt" className="h-8 w-8 rounded"/>

                
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Pour débuter un projet</h2>
                <a className="mt-2 text-sm text-blue-500 dark:text-blue-400 cursor-pointer hover:text-orange-s" href="https://www.malt.fr/profile/ameladdoun"> Échangeons sur Malt </a>
            </div>




            <div className="p-4 rounded-lg shadow-xl bg-grey-s   md:p-6 dark:bg-gray-800" data-aos="zoom-in-up" data-aos-delay="105"
     data-aos-duration="1600">
            <img src={require("../assets/calendly.png")} alt="logo calendly" className="h-8 w-14 -ml-3 rounded"/>

                
                <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">Pour prendre un rendez-vous</h2>
                <a className="mt-2 text-sm text-blue-500 dark:text-blue-400 cursor-pointer hover:text-orange-s" href="https://calendly.com/amel-addoun">Rencontrons-nous sur Calendly</a>
            </div>
        </div>
    </div>
</section>




   
  );
};

export default Contact;

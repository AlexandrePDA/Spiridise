import React, { useRef, useState, useEffect }  from "react";
import CountUp from 'react-countup';

const Stats = () => {

  const divRef = useRef(null);
  const [estVisible, setEstVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setEstVisible(true);
        } else {
          setEstVisible(false);
        }
      });
    });
    observer.observe(divRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);
  

  return (
    <section ref={divRef} className="text-gray-600 body-font mt-12 z-[-20]">
      <div className="container px-5 pb-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out"  className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
            Des <span className="bg-orange-s rounded-lg font-bold px-3  text-white">lettres</span> ... <br/>
          </h2>
          <h2 data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500" className="sm:text-3xl text-2xl font-semibold title-font mb-4 text-gray-900">
          Mais aussi des <span className="bg-orange-s rounded-lg font-bold px-3  text-white">chiffres</span>
          </h2> 
            
          
        </div>
        <div className="flex flex-wrap -m-4 text-center">

          
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full z-[-20]" data-aos="zoom-in"
              data-aos-delay="50">
            <div className="border-2 flex justify-center items-center  border-gray-100 px-4 py-6 h-52 rounded-lg shadow-lg">
              <div className="flex-col">
              <h2 className="title-font font-medium text-3xl text-gray-900">
                +
              {estVisible && <CountUp duration={2} end={500} scrollSpyDelay={8} scrollSpyOnce={true}/>}
                K
              </h2>
              <p className="leading-relaxed">Mots rédigés 💬</p>

              </div>
              
            </div>
          </div>


          <div
            className="p-4 md:w-1/4 sm:w-1/2 w-full z-[-20]"
            data-aos="zoom-in"
              data-aos-delay="50"
          >
            <div className="border-2 flex justify-center items-center border-gray-100 px-4 py-6 h-52 rounded-lg shadow-lg">
              <div>
              
              <h2 className="title-font font-medium text-3xl text-gray-900">
                {estVisible && <CountUp duration={2} end={50} />}
              </h2>
              <p className="leading-relaxed">Collaborations 👥</p>

              </div>
            </div>
          </div>


          <div
            className="p-4 md:w-1/4 sm:w-1/2 w-full z-[-20]"
            data-aos="zoom-in"
              data-aos-delay="50"
          >
            <div className="border-2 flex justify-center items-center border-gray-100 px-4 py-6 h-52 rounded-lg shadow-lg">
             <div>
              <h2 className="title-font font-medium text-3xl text-gray-900">
                {estVisible && <CountUp duration={2} end={15} />}
                </h2>
              <p className="leading-relaxed">Sujets couverts 📚</p>

             </div>
            </div>
          </div>

          


          <div
            className="p-4 md:w-1/4 sm:w-1/2 w-full z-[-20]"
            data-aos="zoom-in"
              data-aos-delay="50"
          >
            <div className="border-2 flex justify-center items-center border-gray-100  h-52 px-4 py-6 rounded-lg shadow-lg">
             <div>

              <h2 className="title-font font-medium text-3xl text-gray-900">
                {estVisible && <CountUp duration={2} end={3} />}
              </h2>
              <p className="leading-relaxed">Langues maîtrisées 🗣️</p>

             </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Stats;

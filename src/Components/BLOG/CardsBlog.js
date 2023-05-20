import React from "react";

const CardsBlog = (item, index) => {
 

  return (

<div id={index} className=" sm:mx-8 mt-8">
      <div className="bg-gray-100 p-12 flex flex-col items-start">
        <span className="inline-block py-1 px-2 rounded text-white bg-orange-s text-xs font-medium tracking-widest">{item.props.category}</span>
        <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{item.props.title}</h2>
        <p className="leading-relaxed mb-8">{item.props.resume}</p>
        <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
          <a className="text-orange-s inline-flex items-center">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
        <p className="text-gray-300 text-sm">Publié le {item.props.date}</p>
      </div>
      </div>

  );
};

export default CardsBlog;

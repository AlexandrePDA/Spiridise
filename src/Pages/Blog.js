import React, { useEffect, useState } from "react";
import jsonArticles from "../Components/BLOG/articles.json";
import CardsBlog from "../Components/BLOG/CardsBlog";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Blog = () => {
  const [jsonData, setJsonData] = useState([]);
  const [filter, setFilter] = useState("");
  
  {/* CATEGORIES A AJOUTER A CHAQUE AJOUT D'UNE NOUVELLE CATEGORIE*/}
  const options = ['Banque', 'Ressources humaines'];
  


  const fetchPosts = async (filter) => {
    try {
      if(filter !== "")
      {
        const filteredData = jsonArticles.filter((item) => item.category === filter);
        setJsonData(filteredData);
      }
      else setJsonData(jsonArticles);
    } catch (error) {
      console.error("Erreur de fetch :", error);
    }
  };



  const handleOptionChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    fetchPosts(filter);
    console.log("changement");
  }, [filter]);

  console.log(filter);

  return (
    <div>
      <Header />
      <div className="flex-wrap px-4 mt-32 ">
        <h1 className="text-4xl sm:mx-8">Blog ⚡️</h1>

        <div className="flex sm:mx-8">
          <h2>Filtrez votre recherche :</h2>
          <select value={filter} onChange={handleOptionChange}>
            <option value="">Toutes catégories</option>
            {options.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {jsonData.map((item, index) => (
          <CardsBlog props={item} key={index} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;

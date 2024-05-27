import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
import "./menstorepage.css"; // Import the CSS file
import menBgImg2 from "./mentshirtsection.jpg";
import menBgImg from "./elecbg2.webp";

const MenStorePage = () => {
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const navigate = useNavigate();
  const [currentBgImg, setCurrentBgImg] = useState(menBgImg);
  const images = [menBgImg2, menBgImg];
  const tokenMernKart = localStorage.getItem("tokenMernKart") || null;
 
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((response) => response.json())
      .then((data) => {
        setDataToDisplay(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    const interval = setInterval(() => {
      setCurrentBgImg((prevImg) =>
        prevImg === images[0] ? images[1] : images[0]
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const sortLowToHigh = () => {
    const sortedData = [...dataToDisplay].sort((a, b) => a.price - b.price);
    setDataToDisplay(sortedData);
  };

  const sortHighToLow = () => {
    const sortedData = [...dataToDisplay].sort((a, b) => b.price - a.price);
    setDataToDisplay(sortedData);
  };

  const resetFilters = () => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((response) => response.json())
      .then((data) => {
        setDataToDisplay(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div>
      <Header />

      <div
         className="bg-cover bg-center h-40 flex  transition-all duration-1000"
        style={{ backgroundImage: `url(${currentBgImg})`, color: "grey" }}
      >
        <button onClick={() => navigate("/")} className="text-grey mb-36 mx-1">
          Home |{" "}
        </button>
        <button
          onClick={() => navigate("/womenstore")}
          className="text-grey mb-36 mx-1"
        >
          | Women |
        </button>
        <button
          onClick={() => navigate("/electronicstore")}
          className="text-grey mb-36 mx-1"
        >
          | Electronics
        </button>
      </div>

      <div className="store-container">
        <div className="filter-container w-1/5 p-2 border-r border-gray-300">
          <h2>Filters</h2>
          <div className="flex flex-col space-y-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={sortLowToHigh}
            >
              Price: Low to High
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={sortHighToLow}
            >
              Price: High to Low
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        </div>

        <div className="products-container w-4/5 p-2 grid gap-5 justify-start">
          {dataToDisplay.map((item) => (
            <div key={item.id} className="product-item p-3">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="price">${item.price}</p>
              <button   className="CartBtn">
                <span className="IconContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                    fill="rgb(17, 17, 17)"
                    className="cart"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.7 32.7L141.5 64H458.7c27.7 0 52.7 17.8 61.6 44.1L575.1 251c5.9 17.7 2.8 37.2-8.5 52.2s-28.4 23.7-47 23.7H221.5l6.5 32H496c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-11.4 0-21.3-8-23.7-19.3L126.3 88.7l-20.1-42C103 41.2 86.9 32 69.5 32H24C10.7 32 0 21.3 0 8s10.7-8 24-8zM288 448a32 32 0 1 1 0-64 32 32 0 0 1 0 64zm-160 0a32 32 0 1 1 0-64 32 32 0 0 1 0 64z" />
                  </svg>
                </span>
                <span className="text">Add to Cart</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MenStorePage;

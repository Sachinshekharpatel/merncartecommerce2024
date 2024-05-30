import React, { useEffect, useState } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
import "./menstorepage.css"; // Import the CSS file
import menBgImg from "./mentshirtsection.jpg";
import womenBgImg from "./womenpagebg.avif";
import womenBgImg2 from "./womenbg2.avif";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { arrayReduxBtn } from "../../reduxstore/reduxstore";
const JeweleryStore = () => {
  const dispatch = useDispatch();
  const userEmail = localStorage.getItem("emailMernCart") || null;
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const navigate = useNavigate();
  const [currentBgImg, setCurrentBgImg] = useState(womenBgImg);
  const images = [menBgImg, womenBgImg2];
  const tokenMernKart = localStorage.getItem("tokenMernKart") || null;
  const cartItemarray = useSelector(
    (state) => state.arrayStore.totalCartItemUser
  );
  const showModalLogin = useSelector(
    (state) => state.arrayStore.showLoginModal
  );
  const [itemAddedToCart, setItemAddedToCart] = useState(false);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        const JeweleryShop = data.filter((product) => {
          return product.category === "jewelery";
        });
        // console.log(JeweleryShop);
        setDataToDisplay(JeweleryShop);
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

  useEffect(() => {
    console.log(showModalLogin);
    console.log(userEmail);
    if (showModalLogin) {
      const interval = setInterval(() => {
        dispatch(arrayReduxBtn.loginCheckerFun(false));
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [showModalLogin]);
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
  const addToCartBtnhandler = (item) => {
    let data = {
      ...item,
      quantity: 1,
      email: userEmail,
    };

    if (userEmail === null) {
      dispatch(arrayReduxBtn.loginCheckerFun(true));
      return;
    } else {
      try {
        axios
          .post(
            `https://sachinstepsdatabase-default-rtdb.firebaseio.com/merncartItems.json`,
            data
          )
          .then((res) => {
            data = {
              ...data,
              id: res.data.name,
            };
            axios
              .put(
                `https://sachinstepsdatabase-default-rtdb.firebaseio.com/merncartItems/${data.id}.json`,
                data
              )
              .then((res) => {
                const data = [...cartItemarray, res.data];
                setItemAddedToCart(true);
                dispatch(arrayReduxBtn.totalCartItemFunction(data));
                setTimeout(() => {
                  setItemAddedToCart(false);
                }, 2000);
              })
              .catch((err) => {
                console.log(err);
              });
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <Header />

      <div
        className="bg-cover bg-center h-40 flex  transition-all duration-1000"
        style={{ backgroundImage: `url(${currentBgImg})`, color: "grey" }}
      >
        <button
          onClick={() => navigate("/")}
          style={{ color: "grey", marginBottom: "140px" }}
        >
          Home |{" "}
        </button>
        <button
          onClick={() => navigate("/womenstore")}
          style={{ color: "grey", marginBottom: "140px" }}
        >
          | Women |
        </button>
        <button
          onClick={() => navigate("/electronicstore")}
          style={{ color: "grey", marginBottom: "140px" }}
        >
          | Electronics
        </button>
      </div>
      <div className="store-container">
        <div className="filter-container">
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
        <div className="products-container">
          {dataToDisplay.map((item) => (
            <div key={item.id} className="product-item p-3">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <button
                onClick={() => addToCartBtnhandler(item)}
                className="CartBtn"
              >
                <span className="IconContainer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 576 512"
                    fill="rgb(17, 17, 17)"
                    className="cart"
                  >
                    <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                  </svg>
                </span>
                <p className="text">Add to Cart</p>
              </button>
            </div>
          ))}
        </div>
      </div>
      {itemAddedToCart && (
        <div className="fixed top-4 right-4 transition-opacity duration-300 ease-in-out opacity-100">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
            Item Added To Cart
          </button>
        </div>
      )}

      {showModalLogin && (
        <div className="fixed top-4 right-4 transition-opacity duration-300 ease-in-out opacity-100">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
            Please Login
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default JeweleryStore;

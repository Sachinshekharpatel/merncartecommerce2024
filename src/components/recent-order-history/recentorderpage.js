import React, { useEffect, useState } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useSelector } from "react-redux";
import cartImg from "./youcartimg2.png";
import "./cartpage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { arrayReduxBtn } from "../../reduxstore/reduxstore";
const RecentOrderPage = () => {
  const dispatch = useDispatch();
  const [orderCancelled, setorderCancelled] = useState(false);
  const cartItem = useSelector((state) => state.arrayStore.orderHistory);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      axios
        .get(
          "https://sachinstepsdatabase-default-rtdb.firebaseio.com/mernCartItemsHistory.json"
        )
        .then((res) => {
          if (res.data) {
            const data = Object.keys(res.data).map((key) => {
              return { ...res.data[key] };
            });

            const userdata = data.filter(
              (item) => item.email === localStorage.getItem("emailMernCart")
            );
            console.log(userdata);
            dispatch(arrayReduxBtn.orderHandlerRemoveFromDom(userdata));
          } else {
            dispatch(arrayReduxBtn.orderHandlerRemoveFromDom([]));
          }
        });
    } catch (error) {
      console.log("not able to find orderHistory");
    }
  }, []);

  const formatDate = (date) => {
    let day = String(date.getDate()).padStart(2, "0");
    let month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
    let year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const today = new Date();
  const deliveryDate = new Date();
  deliveryDate.setDate(today.getDate() + 3);
  const formattedDate = formatDate(deliveryDate);

  useEffect(() => {
    console.log(orderCancelled, cartItem);
  }, [orderCancelled, cartItem]);

  const cancelOrderBtnHandler = (item) => {
    try {
      axios
        .delete(
          `https://sachinstepsdatabase-default-rtdb.firebaseio.com/mernCartItemsHistory/${item.id}.json`
        )
        .then((res) => {
          console.log(item.id);
          setorderCancelled(true);
          const updatedCart = cartItem.filter((res) => res.id !== item.id);
          dispatch(arrayReduxBtn.orderHandlerRemoveFromDom(updatedCart));
          setTimeout(() => {
            setorderCancelled(false);
          }, 2000);
        });
    } catch (error) {
      console.log("error on cancel order Button Api");
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {cartItem.length === 0 ? (
        <main
          style={{ flexGrow: 1, backgroundColor: "#F5F4F5" }}
          className="flex-grow"
        >
          <div className="container mx-auto p-4 text-center">
            <div className="mb-4">
              <img src={cartImg} alt="Cart" className="mx-auto" />
            </div>
            <div className="mb-4">
              <p className="text-lg font-bold text-red-500 mb-4">
                You dont have any order yet .
              </p>
            </div>

            <div className="flex justify-center mb-4">
              <button
                onClick={() => navigate("/menstore")}
                className="continueshopping mr-4"
              >
                <span>Continue Shopping</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 74 74"
                  height="34"
                  width="34"
                >
                  <circle
                    strokeWidth="3"
                    stroke="black"
                    r="35.5"
                    cy="37"
                    cx="37"
                  ></circle>
                  <path
                    fill="black"
                    d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </main>
      ) : (
        <>
          {cartItem.map((item, index) => (
            <div key={index} className="mb-4 cart-item">
              <div className="cart-item-container">
                <div className="image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-40 h-40 object-cover"
                  />
                </div>
                <div className="content">
                  <p className="text-lg font-semibold">
                    {item.title.split(" ")[0]}
                  </p>
                  <p className="font-bold text-gray-600">${item.price}</p>
                  <p className="font-bold text-gray-600">
                    Expected Delivery Date: {formattedDate}
                  </p>
                </div>
                <button
                  onClick={() => cancelOrderBtnHandler(item)}
                  className="buttoncancel mt-4"
                >
                  <svg viewBox="0 0 448 512" className="svgIcon">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-center mb-4">
            <button
              onClick={() => navigate("/menstore")}
              className="continueshopping mr-4"
            >
              <span>Continue Shopping</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 74 74"
                height="34"
                width="34"
              >
                <circle
                  strokeWidth="3"
                  stroke="black"
                  r="35.5"
                  cy="37"
                  cx="37"
                ></circle>
                <path
                  fill="black"
                  d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                ></path>
              </svg>
            </button>
          </div>
        </>
      )}
      {orderCancelled && (
        <div className="fixed top-4 right-4 transition-opacity duration-300 ease-in-out opacity-100">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
            Order-Cancelled
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default RecentOrderPage;

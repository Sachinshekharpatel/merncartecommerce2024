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
const CartPage = () => {
  const dispatch = useDispatch();

  const cartItem = useSelector((state) => state.arrayStore.totalCartItemUser);
  const navigate = useNavigate();
  const cartItemarray = useSelector(
    (state) => state.arrayStore.totalCartItemUser
  );
  const totalAmount = useSelector(
    (state) => state.arrayStore.totalAmountOfCart
  );
  useEffect(() => {
    console.log(cartItemarray, cartItemarray.length);
    console.log(totalAmount);
  }, [cartItemarray, totalAmount]);

  const removeItemHandler = (item) => {
    axios
      .delete(
        `https://sachinstepsdatabase-default-rtdb.firebaseio.com/merncartItems/${item.id}.json`
      )
      .then((res) => {
        console.log(res);

        const updatedCart = cartItem.filter((res) => res.id !== item.id);
        dispatch(arrayReduxBtn.totalCartItemFunction(updatedCart));
      });
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
                Missing Cart Items?
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
                </div>
                
                <button
                  onClick={() => {
                    removeItemHandler(item);
                  }}
                  className="deletebutton tooltip"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                    height="25"
                    width="25"
                  >
                    <path
                      fill="#6361D9"
                      d="M8.78842 5.03866C8.86656 4.96052 8.97254 4.91663 9.08305 4.91663H11.4164C11.5269 4.91663 11.6329 4.96052 11.711 5.03866C11.7892 5.11681 11.833 5.22279 11.833 5.33329V5.74939H8.66638V5.33329C8.66638 5.22279 8.71028 5.11681 8.78842 5.03866ZM7.16638 5.74939V5.33329C7.16638 4.82496 7.36832 4.33745 7.72776 3.978C8.08721 3.61856 8.57472 3.41663 9.08305 3.41663H11.4164C11.9247 3.41663 12.4122 3.61856 12.7717 3.978C13.1311 4.33745 13.333 4.82496 13.333 5.33329V5.74939H15.5C15.9142 5.74939 16.25 6.08518 16.25 6.49939C16.25 6.9136 15.9142 7.24939 15.5 7.24939H15.0105L14.2492 14.7095C14.2382 15.2023 14.0377 15.6726 13.6883 16.0219C13.3289 16.3814 12.8414 16.5833 12.333 16.5833H8.16638C7.65805 16.5833 7.17054 16.3814 6.81109 16.0219C6.46176 15.6726 6.2612 15.2023 6.25019 14.7095L5.48896 7.24939H5C4.58579 7.24939 4.25 6.9136 4.25 6.49939C4.25 6.08518 4.58579 5.74939 5 5.74939H6.16667H7.16638ZM7.91638 7.24996H12.583H13.5026L12.7536 14.5905C12.751 14.6158 12.7497 14.6412 12.7497 14.6666C12.7497 14.7771 12.7058 14.8831 12.6277 14.9613C12.5495 15.0394 12.4436 15.0833 12.333 15.0833H8.16638C8.05588 15.0833 7.94989 15.0394 7.87175 14.9613C7.79361 14.8831 7.74972 14.7771 7.74972 14.6666C7.74972 14.6412 7.74842 14.6158 7.74584 14.5905L6.99681 7.24996H7.91638Z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="tooltiptext">Remove</span>
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
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                borderRadius: "15px",
              }}
              onClick={() => navigate("/payment")}
              className="proceedtopayment"
            >
              Proceed to Payment <span>{totalAmount}</span>
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default CartPage;

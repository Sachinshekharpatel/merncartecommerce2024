import React, { useEffect, useState } from "react";
import logo from "./ecommercelogo.jpg";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  const [tokenMernCart, setTokenMernCart] = useState(null);
  
  useEffect(() => {
     if(tokenMernCart === null){
      setTokenMernCart(localStorage.getItem("tokenMernCart"))
     }
  },[tokenMernCart])
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const logoutBtnHandler = () => {
    localStorage.removeItem("tokenMernCart");
    localStorage.removeItem("emailMernCart");
    navigate("/loginpage");
  };  

  const storeFunctionMenHandlerBtn = () => {
    navigate("/menstore");
    setShowOptions(false);
  };
  const storeFunctionJeweleryHandlerBtn = () => {
    navigate("/jewelerystore");
    setShowOptions(false);
  };

  const storeFunctionWomenHandlerBtn = () => {
    navigate("/womenstore");
    setShowOptions(false);
  };
  const storeFunctionElectronicsHandlerBtn = () => {
    navigate("/electronicstore");
    setShowOptions(false);
  };

  return (
    <header className="bg-gray-800 p-4 md:p-6 flex flex-col md:flex-row justify-between items-center">
      <div className="relative">
        <button
          id="menuToggle"
          className="categorybtn text-white focus:outline-none mr-4"
          onClick={toggleOptions}
        >
          <label className="toggle" for="checkbox">
            <div className="bar bar--top"></div>
            <div className="bar bar--middle"></div>
            <div className="bar bar--bottom"></div>
          </label>
        </button>
        {showOptions && (
          <div className="absolute bg-gray-800 p-2 mt-1 rounded-md shadow-lg">
            <ul>
              <li onClick={storeFunctionMenHandlerBtn}>
                <Link className="text-white block py-2 px-4 hover:bg-gray-700">
                  Men
                </Link>
              </li>
              <li onClick={storeFunctionWomenHandlerBtn}>
                <Link className="text-white block py-2 px-4 hover:bg-gray-700">
                  Women
                </Link>
              </li>
              <li onClick={storeFunctionJeweleryHandlerBtn}>
                <Link className="text-white block py-2 px-4 hover:bg-gray-700">
                  Jewelery
                </Link>
              </li>
              <li onClick={storeFunctionElectronicsHandlerBtn}>
                <Link className="text-white block py-2 px-4 hover:bg-gray-700">
                  Electronics
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex items-center">
        <img style={{ borderRadius: "50%" }} src={logo} alt="Logo" className="h-8 md:h-10 mr-2" />
        <h1 className="text-white text-lg md:text-xl font-bold">Mern Cart</h1>
      </div>
      <div className="flex items-center mt-4 md:mt-0 md:ml-4 flex-grow">
        <input
          type="text"
          placeholder="Search"
          className="rounded-l-md p-2 md:p-3 focus:outline-none focus:ring focus:border-blue-300 w-full md:max-w-md"
        />
        <button className="bg-blue-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Search
        </button>
      </div>
      <div className="flex items-center mt-4 ml-2 md:mt-0">
        <div className="button-container">
          <button onClick={() => navigate("/")} className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 1024 1024"
              strokeWidth="0"
              fill="currentColor"
              stroke="currentColor"
              className="icon"
            >
              <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
            </svg>
          </button>
          <button onClick={() => navigate("/aboutus")} className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              stroke-width="0"
              fill="currentColor"
              stroke="currentColor"
              className="icon"
            >
              <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
            </svg>
          </button>

          <button className="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              stroke-linejoin="round"
              stroke-linecap="round"
              viewBox="0 0 24 24"
              stroke-width="2"
              fill="none"
              stroke="currentColor"
              className="icon"
            >
              <circle r="1" cy="21" cx="9"></circle>
              <circle r="1" cy="21" cx="20"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
          </button>
        </div>
        {tokenMernCart !== null ? (
          <div>
            <button onClick={logoutBtnHandler} class="Btn">
              <div className="sign">
                <svg viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>

              <div className="text">Logout</div>
            </button>
          </div>
        ):<button onClick={()=>{navigate("/loginpage")}} className="PleaseLoginbtn">Please Login</button>}
      </div>
    </header>
  );
};

export default Header;

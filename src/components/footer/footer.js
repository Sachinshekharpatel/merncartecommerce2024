import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const [subscribeBtn, setsubscribeBtn] = useState(false);
  const emailRef = useRef();
  const subscribeBtnHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    if (email.length > 3 && email.includes("@")) {
      setsubscribeBtn(true);
      setTimeout(() => {
        setsubscribeBtn(false);
      }, 2000);
    }

    emailRef.current.value = "";
  };
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
            <div className="flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/sachin-shekhar-patel-04b47a239/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 hover:text-gray-500 transition duration-300"
              >
                <LinkedInIcon style={{ fontSize: "2.5rem" }} />
              </a>

              <a
                href="mailto:heroft7024@gmail.com"
                className="hover:text-gray-500 transition duration-300"
              >
                <EmailIcon style={{ fontSize: "2.5rem" }} />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:text-gray-500">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/menstore" className="hover:text-gray-500">
                  Shop
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/aboutus" className="hover:text-gray-500">
                  About us
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/contactus" className="hover:text-gray-500">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl font-bold mb-4"></h2>
            <form className="mb-4" onSubmit={subscribeBtnHandler}>
              <input
                type="email"
                ref={emailRef}
                required
                className="bg-gray-800 text-white w-full px-4 py-3 mb-3 rounded-sm focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-3 px-6 rounded-sm hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Subscribe
              </button>
            </form>
            <p>Get the latest updates and offers directly in your inbox.</p>
          </div>
        </div>
        <hr className="border-gray-800 my-8" />
        <div className="text-center">
          <p className="text-sm">
            &copy; 2024 Mern Cart Inc. All rights reserved.
          </p>
          <p className="text-sm">&copy; Developed By Sachin Shekhar Patel.</p>
        </div>
      </div>
      {subscribeBtn && (
        <div
          className="fixed top-4 right-4"
          style={{
            transition: "opacity 0.3s ease-in-out",
            opacity: subscribeBtn ? 1 : 0, // Apply fade-out effect when itemAddedToCart is false
          }}
        >
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">
            Subscribed
          </button>
        </div>
      )}
    </footer>
  );
};

export default Footer;

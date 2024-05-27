import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const Footer = () => {
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
            <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
            <form className="mb-4">
              <input
                type="email"
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;

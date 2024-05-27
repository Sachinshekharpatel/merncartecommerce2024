import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../header/header";
import Footer from "../footer/footer";

const LoginPage = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const loginBtnHandler = async (e) => {
    e.preventDefault();

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCptE9QtAawOyBKdjmzWWZM5PegYF0W-g0`,
        data
      );

      if (response.status === 200) {
        console.log("Login successful");
        navigate("/");
        localStorage.setItem("tokenMernCartidToken", JSON.stringify(response.data.idToken));
        localStorage.setItem("emailMernCart", JSON.stringify(response.data.email));
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        alert(error.response.data.error.message); // Display error message in alert
      } else {
        alert("An error occurred. Please try again."); // Fallback error message
      }
    }
  };

  return (
    <div className="loginpageparent min-h-screen">
      <Header />
      <h2 className="text-center text-gray-600 text-3xl font-bold py-5">MernCart</h2>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
        <form onSubmit={loginBtnHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              ref={emailRef}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              ref={passwordRef}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <div className="mt-3 text-center">
          <p>
            Don't have an account? <Link to="/signuppage" className="text-indigo-600">Sign Up</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;

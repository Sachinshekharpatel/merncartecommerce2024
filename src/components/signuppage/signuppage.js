import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../header/header";
import Footer from "../footer/footer";
import menBgImg from "./elecbg2.webp";
import womenBgImg from "./electronicbg1.webp";

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const apiKey = "AIzaSyCptE9QtAawOyBKdjmzWWZM5PegYF0W-g0";

  const [currentBgImg, setCurrentBgImg] = useState(womenBgImg);
  const images = [menBgImg, womenBgImg];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgImg((prevImg) =>
        prevImg === images[0] ? images[1] : images[0]
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    const userRegistered = {
      email: email,
      password: password,
      displayName: username,
      returnSecureToken: true,
    };

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    } else {
      try {
        axios
          .post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
            userRegistered
          )
          .then((response) => {
            console.log("Signup successful with email:", email);
            setEmail("");
            setConfirmPassword("");
            setPassword("");
            setUsername("");
            alert("User Registered Successfully");
            navigate("/loginpage");
          });
      } catch (error) {
        alert("Please enter valid credentials");
        console.log(error);
      }
    }
  };

  return (
    <>
      <div
        className="bg-cover bg-center h-40 flex  transition-all duration-1000"
        style={{ backgroundImage: `url(${currentBgImg})`, color: "grey" }}
      ></div>
      <div className="signuppageparent bg-gradient-to-br from-gray-200 to-gray-600">
        <div className="container mx-auto p-5">
          <h2 className="text-center text-gray-600 text-3xl font-bold py-5">
            Mern Cart
          </h2>
          <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6">
            <form onSubmit={handleSignup}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  min={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  min={6}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign Up
              </button>
            </form>
            <div className="mt-3 text-center">
              <p style={{ fontSize: "14px", color: "gray" }}>
                Already have an account?{" "}
                <Link to="/loginpage" className="text-indigo-600">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SignupPage;

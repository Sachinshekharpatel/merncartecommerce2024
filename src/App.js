import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { arrayReduxBtn } from "./reduxstore/reduxstore";
import AboutusPage from "./components/aboutuspage/aboutus";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcomepage from "./components/welcomepage/welcomepage";
import ContactPage from "./components/contactpage/contactpage";
import MenStorePage from "./components/store/menstorepage";
import WomenStore from "./components/store/womenstore";
import JeweleryStore from "./components/store/jewelerystore";
import ElectronicStore from "./components/store/electronicstore";
import LoginPage from "./components/loginpage/loginpage";
import SignupPage from "./components/signuppage/signuppage";
import axios from "axios";
import { useSelector } from "react-redux";
import CartPage from "./components/cartpage/cartpage";
function App() {
  const dispatch = useDispatch();
  const emailMernCart = localStorage.getItem("emailMernCart");
  const cartItemarray = useSelector(
    (state) => state.arrayStore.totalCartItemUser
  );

  useEffect(() => {
    axios
      .get(
        "https://sachinstepsdatabase-default-rtdb.firebaseio.com/merncartItems.json"
      )
      .then((response) => {
        let data = Object.values(response.data || {}); // Convert response data to an array
        const userCart = data.filter((item) => {
          if (item.email === emailMernCart) {
            return item;
          }
        });

        const totalSum = userCart.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        },0)
        console.log(userCart);
        dispatch(arrayReduxBtn.totalAmountCalculation(totalSum));
        dispatch(arrayReduxBtn.totalCartItemFunction(userCart));
      });
  }, [cartItemarray.length]);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcomepage></Welcomepage>}></Route>
          <Route path="/aboutus" element={<AboutusPage></AboutusPage>}></Route>
          <Route path="/cartpage" element={<CartPage />}></Route>
          <Route
            path="/contactus"
            element={<ContactPage></ContactPage>}
          ></Route>
          <Route path="/signuppage" element={<SignupPage />}></Route>
          <Route
            path="/menstore"
            element={<MenStorePage></MenStorePage>}
          ></Route>
          <Route path="/womenstore" element={<WomenStore></WomenStore>}></Route>
          <Route
            path="/jewelerystore"
            element={<JeweleryStore></JeweleryStore>}
          ></Route>
          <Route
            path="/electronicstore"
            element={<ElectronicStore></ElectronicStore>}
          ></Route>
          <Route path="/loginpage" element={<LoginPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;

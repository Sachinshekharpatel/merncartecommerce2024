import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import BgImage from "./sale2.webp";
const ContactPage = () => {
  return (
    <div>
      <Header />
      <div
        className="bg-cover bg-center h-72 flex justify-center items-center text-white"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
      </div>
      <div className="bg-#F7F7F7 ">
        <div
          style={{
            textAlign: "center",
            padding: "20px",
            marginTop: "20px",
            backgroundColor: "#F7F7F7",
          }}
        >
          <h3 className="text-2xl font-bold  mb-2">
            Mern Cart Internation PVT.LTD
          </h3>
          <p>Copyright © 2024. All Rights Reserved.</p>
          <p> CIN : U74999MH2021PTC</p>
        </div>
      </div>
      <div className="container mx-auto mt-8 mb-8 ">
        <div className="flex flex-wrap justify-center space-y-8 lg:space-y-0 lg:space-x-8">
          <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 bg-#F7F7F7 w-96">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">
                For Any Query Related to Products and Orders
              </h3>
              <p className="text-gray-700">Address: 123 Mern Street</p>
              <p className="text-gray-700">City: React City</p>
              <p className="text-gray-700">Country: TailwindCSS</p>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">Email Us</h3>
              <p className="text-blue-500">Email: heroft7024@example.com</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Call Us</h3>
              <p className="text-blue-500">Phone: +91626387737</p>
            </div>
          </div>

          <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 bg-#F7F7F7 w-96">
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">
                For Any Query Related to Organizational Purchases
              </h3>
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">Email Us</h3>
              <p className="text-blue-500">
                Email: purchaseheroft7024@example.com
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">Call Us</h4>
              <p className="text-blue-500">Phone: +91626387737</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;

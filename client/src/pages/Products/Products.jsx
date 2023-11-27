import React from "react";
import LeftSidebar from "../DashBoared/LeftSidebar";
import banyan from "../../assets/banyan.jpg";
import cart from "../../assets/cartpic.svg";

const Products = () => {
  return (
    <div className="flex w-12/12 mx-auto bg-sky-400 h-screen gap-x-6 mt-[2rem]">
      <LeftSidebar />
      <div className="flex flex-col w-full bg-green-800 text-white items-center">
        <div className="w-11/12 flex gap-7 bg-red-600">
          <div className="w-[17rem] bg-green-200 h-60 object-cover flex flex-col">
            <img src={banyan} className="" alt="" />
            <div className="w-full flex flex-col">
              <div className="w-full flex justify-between">
                <span className="flex flex-col justify-center items-center">
                  <img src={cart} alt="cart" className="h-6 bg-green-200" />
                </span>

                <span className="flex flex-col justify-center items-center">
                  <img src={cart} alt="cart" className="h-6 bg-green-200" />
                </span>
              </div>
              <p>
                description : Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dicta earum officiis nihil eos amet, natus quae inventore
                rerum dignissimos?
              </p>
            </div>
          </div>

          <div className="w-[17rem] bg-green-200 h-60 object-cover flex flex-col">
            <img src={banyan} className="" alt="" />
            <div className="w-full flex flex-col">
              <div className="w-full flex justify-between">
                <span className="flex flex-col justify-center items-center">
                  <img src={cart} alt="cart" className="h-6 bg-green-200" />
                </span>

                <span className="flex flex-col justify-center items-center">
                  <img src={cart} alt="cart" className="h-6 bg-green-200" />
                </span>
              </div>
              <p>
                description : Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dicta earum officiis nihil eos amet, natus quae inventore
                rerum dignissimos?
              </p>
            </div>
          </div>

          <div className="w-[17rem] bg-green-200 h-60 object-cover flex flex-col">
            <img src={banyan} className="" alt="" />
            <div className="w-full flex flex-col">
              <div className="w-full flex justify-between">
                <span>save</span>

                <span className="flex flex-col justify-center items-center">
                  <img src={cart} alt="cart" className="h-6 bg-green-200" />
                </span>
              </div>
              <p>
                description : Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dicta earum officiis nihil eos amet, natus quae inventore
                rerum dignissimos?
              </p>
            </div>
          </div>

          <div className="w-[17rem] bg-green-200 h-60 object-cover flex flex-col">
            <img src={banyan} className="" alt="" />
            <div className="w-full flex flex-col">
              <div className="w-full flex justify-between">
                <span className="flex flex-col justify-center items-center">
                  <img src={cart} alt="cart" className="h-6 bg-green-200" />
                </span>

                <span className="flex flex-col justify-center items-center">
                  <img src={cart} alt="cart" className="h-6 bg-green-200" />
                </span>
              </div>
              <p>
                description : Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dicta earum officiis nihil eos amet, natus quae inventore
                rerum dignissimos?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

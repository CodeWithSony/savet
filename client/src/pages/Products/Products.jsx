import React from "react";
import LeftSidebar from "../DashBoared/LeftSidebar";
import banyan from "../../assets/banyan.jpg";
import cart from "../../assets/cartpic.svg";
// import heart from '../../assets/Redheart.png'
// import heart from '../../assets/heart-outline.svg'
import heartBlack from '../../assets/blackHeart.png'
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="flex w-full mx-auto bg-sky-400 h-screen gap-x-6 mt-[2rem]">
      <LeftSidebar />
      <div className="flex flex-col w-full bg-green-800 text-black items-center">
        <div className="w-full flex gap-7 gap-y-7 bg-green-200 h-auto flex-wrap justify-between items-start ">
       

        <div className="w-[18rem]  h-auto object-cover flex flex-col p-3 border border-black">
            <Link to="/Detail">

            <img src={banyan} className="" alt="" />
            </Link>
            <div className="w-full flex flex-col bg-red-red">
              <div className="w-full flex justify-between">
                <span className="flex justify-center items-center">
                  <img src={heartBlack} alt="cart" className="h-6 " />
                </span>

                <span className="flex flex-col justify-center items-center">
                  <img src={cart} alt="cart" className="h-6" />
                </span>
              </div>
              <p>
                Fresh and heathy fruit generating plant, oxigen giving, shade giving, shelter giving to birds.
              </p>
              <p>1 plant</p>
              <p>Rating</p>
              <p>&#8377;4   &#8377;<del>10</del>    60% off</p>
            </div>
          </div>


        <div className="w-[18rem]  h-auto object-cover flex flex-col p-3 border border-black">
            <Link to="/Detail">

            <img src={banyan} className="" alt="" />
            </Link>
            <div className="w-full flex flex-col bg-red-red">
              <div className="w-full flex justify-between">
                <span className="flex justify-center items-center">
                  <img src={heartBlack} alt="cart" className="h-6 " />
                </span>

                <span className="flex flex-col justify-center items-center">
                  <img src={cart} alt="cart" className="h-6" />
                </span>
              </div>
              <p>
                Fresh and heathy fruit generating plant, oxigen giving, shade giving, shelter giving to birds.
              </p>
              <p>1 plant</p>
              <p>Rating</p>
              <p>&#8377;4   &#8377;<del>10</del>    60% off</p>
            </div>
          </div>

    
          
        <div className="w-[18rem]  h-auto object-cover flex flex-col p-3 border border-black">
            <Link to="/Detail">

            <img src={banyan} className="" alt="" />
            </Link>
            <div className="w-full flex flex-col bg-red-red">
              <div className="w-full flex justify-between">
                <span className="flex justify-center items-center">
                  <img src={heartBlack} alt="cart" className="h-6 " />
                </span>

                <span className="flex flex-col justify-center items-center">
                  <img src={cart} alt="cart" className="h-6" />
                </span>
              </div>
              <p>
                Fresh and heathy fruit generating plant, oxigen giving, shade giving, shelter giving to birds.
              </p>
              <p>1 plant</p>
              <p>Rating</p>
              <p>&#8377;4   &#8377;<del>10</del>    60% off</p>
            </div>
          </div>

        <div className="w-[18rem]  h-auto object-cover flex flex-col p-3 border border-black">
            <Link to="/Detail">

            <img src={banyan} className="" alt="" />
            </Link>
            <div className="w-full flex flex-col bg-red-red">
              <div className="w-full flex justify-between">
                <span className="flex justify-center items-center">
                  <img src={heartBlack} alt="cart" className="h-6 " />
                </span>

                <span className="flex flex-col justify-center items-center">
                  <img src={cart} alt="cart" className="h-6" />
                </span>
              </div>
              <p>
                Fresh and heathy fruit generating plant, oxigen giving, shade giving, shelter giving to birds.
              </p>
              <p>1 plant</p>
              <p>Rating</p>
              <p>&#8377;4   &#8377;<del>10</del>    60% off</p>
            </div>
          </div>


        <div className="w-[18rem]  h-auto object-cover flex flex-col p-3 border border-black">
            <Link to="/Detail">

            <img src={banyan} className="" alt="" />
            </Link>
            <div className="w-full flex flex-col bg-red-red">
              <div className="w-full flex justify-between">
                <span className="flex justify-center items-center">
                  <img src={heartBlack} alt="cart" className="h-6 " />
                </span>

                <span className="flex flex-col justify-center items-center">
                  <img src={cart} alt="cart" className="h-6" />
                </span>
              </div>
              <p>
                Fresh and heathy fruit generating plant, oxigen giving, shade giving, shelter giving to birds.
              </p>
              <p>1 plant</p>
              <p>Rating</p>
              <p>&#8377;4   &#8377;<del>10</del>    60% off</p>
            </div>
          </div>





        </div>
      </div>
    </div>
  );
};

export default Products;

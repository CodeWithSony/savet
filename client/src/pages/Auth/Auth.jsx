import React from "react";
import { useState } from "react";
// import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import tara from "../../assets/tara.jpeg";

import { signup, login } from "../../action/auth";
// import signup from

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const dispatch = useDispatch();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignUp(!isSignUp);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Enter email and password...");
    }
 
    if (isSignUp) {
      if (!name) {
        alert("Enter a name...");
      }
      // console.log(name, email, password);
      dispatch(signup({ name, email, password }, navigate));
      // Dispatch basically triggers the action
      // And action is responsible for changing the state of application (means adding, removing or updating the data of application)
    } else {
      dispatch(login({ email, password }, navigate));
    }
    
  };

  return (
    <section className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="flex justify-center h-[30rem] items-center rounded-lg">
        {isSignUp && (
          <img
            src={tara}
            alt="overflow"
            className="h-[33rem] border-4 border-green-500 rounded-9 rounded-md  shadow-green-500/40 shadow-md hover:shadow-green-200/40"
          />
        )}
        {/* {isSignUp && <AboutAuth />} */}
        <div className="w-[28rem] flex flex-col justify-between items-center">
      
          <form
            onSubmit={handlerSubmit}
            className="flex flex-col border border-green-400 rounded-lg w-full justify-center items-center shadow-md"
          >
            {isSignUp && (
              <label className="w-4/5" htmlFor="name">
                <h4 className="mb-5 mt-10">Display Name</h4>
                <input
                  type="text"
                  // className="p-2 w-[calc(100%-30px)] border border-gray-300 text-sm"
                  className="w-full border border-opacity-30 text-sm py-2"
                  id="name"
                  name="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </label>
            )}
            
            <label className="w-4/5" htmlFor="email">
              <h4 className="mb-5 mt-10">Email</h4>
              <input
                type="email"
                name="name"
                className="w-full border border-opacity-30 text-sm py-2"
                id="username"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </label>
            <label className="w-4/5" htmlFor="password">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4 className="mb-5 mt-10">Password</h4>
                {!isSignUp && (
                  <p style={{ color: "#007ac6", fontSize: "13px" }}>
                    forgot password?
                  </p>
                )}
              </div>
              <input
                type="password"
                name="password"
                className="w-full border border-opacity-30 text-sm py-2"
                id="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </label>

            <button
              type="submit"
              className="w-4/5 mt-4 px-2 py-2  bg-green-400 border border-green-500 text-white rounded-md cursor-pointer transition duration-200 text-sm font-extrabold	"
            >
              {isSignUp ? "Sign up" : "Log in"}
            </button>

            {isSignUp && (
              <p style={{ color: "666767", fontSize: "13px" }}>
                By clicking "Sign up" you agree to our
                <span style={{ color: "#007ac6" }}>
                  terms of <br /> service{" "}
                </span>
                <span style={{ color: "#007ac6" }}>privacy policy and </span>
                <span style={{ color: "#007ac6" }}>cookie policy.</span>
              </p>
            )}


          <p>
            {isSignUp ? "already have an account" : "Don't have an account  "}
            <button
              type="button"
              onClick={handleSwitch}
              style={{ fontSize: "13px" }}
              className="font-extrabold text-blue-800 py-2 "
            >
              {isSignUp ? "Log in" : "Sign up"}
            </button>
          </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Auth;

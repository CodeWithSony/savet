import React from "react";
import cart from "../../assets/cartpic.svg";
import { Link } from "react-router-dom";
import search from "../../assets/search.svg";
// import Avatar from "../../Avatar/Avatar.jsx";
import MyAccount from "../../pages/MyAccount";

const Navbar = () => {
  const user = null;
  return (
    <nav className="flex w-full flex-wrap items-center justify-center px-3 bg-green-400 sticky top-0 left-0">
      <div className="w-4/5 items-center justify-between flex my-3 bg-green-400">
        <div className="flex justify-between w-full items-center">
          {/* <Link to="/" className="font-bold"> */}
          <Link to="/" className="nav-logo nav-item">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQsqSia8VMaIdlL0SKFjybBrvA2k0vGVAM77kXH6siLK2xVtxMXX6hGPO1TAA7hIIjAjY&usqp=CAU" alt="logo" className="w-24 border-4 border-green-500 rounded-9 rounded-md shadow shadow-green-500/40 hover:shadow-green-200/40"/>
          
        </Link>
        <Link to="/" className="font-bold text-white">Spread Trees</Link>
        
          {/* </Link> */}
          <form className="w-full flex justify-around relative items-center">
            <input
              type="search"
              name=""
              id=""
              className="w-full py-2 px-5 bg-green-200 text-green-700"
              placeholder="search..."
            />
            <img src={search} alt="" className="absolute right-5 h-6" />
          </form>
        </div>
        <div className="flex justify-around w-full text-lg font-semibold text-white">
          {/* need to give font-size */}
          {/* <h1>My Account</h1> */}

          <MyAccount />
          {/* inside my account there will be login signup page. */}

          <Link to="/">Products</Link>
          {/* Products will be like dropdown */}
          {user === null ? (
            <Link
              to="/Auth"
              className="mx-3 text-sm font-semibold no-underline text-gray-700 transition-bg duration-200 transition-colors px-3 py-2 border border-blue-500 rounded-md bg-blue-100 cursor-pointer"
            >
              Log in
            </Link>
          ) : (
            <>
              {/* <Avatar
                backgroundColor="#009dff"
                px="5px"
                py="7px"
                borderRadius="51%"
                color="white"
                mx="10px"
                textDecoration="none"
              >
                <Link
                  to={`/users/${user.result._id}`}
                  style={{ textDecoration: "none" }}
                >
                  {user.result.name.charAt(0).toUpperCase()}{" "}
                </Link>
              </Avatar> */}
{/* 
              <button className="nav-item navLinks" onClick={handleLogout}>
                Log Out
              </button> */}
            </>
          )}

          <img src={cart} alt="cart" className="h-6" />
          {/* beside of card there will be a cart icon */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
//now u try to add css on that helo now u try

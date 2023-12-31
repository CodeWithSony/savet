import React from "react";
import LeftSidebar from "../../pages/DashBoared/LeftSidebar";
import MainBar from "../../pages/DashBoared/MainBar";

const UserManagement = () => {
  return (
    <div className="flex w-12/12  bg-white h-screen gap-x-6 mt-[2rem]">
      <LeftSidebar />
      <div className="flex flex-col w-full tablet:bg-yellow-500 desktop:bg-red-500 items-center justify-center h-screen">
        <div className="flex w-3/4 flex-col  items-center justify-start h-[24rem] pt-5">
          <h2 className="m-[2rem] font-semibold text-3xl text-black">Users</h2>

          <div className="flex w-full justify-around items-center text-white bg-black flex-col h-[12rem]">
            <div className="flex w-3/4 justify-between items-center">
              <label htmlFor="entries" className="flex">
                Show
                <input
                  type="number"
                  name="number"
                  id="entries"
                  min="1"
                  max="10"
                  placeholder="10"
                  className="w-full text-center"
                />
                Entries
              </label>
              <label htmlFor="search">
                Search
                <input
                  type="search"
                  name=""
                  placeholder="Search"
                  id="search"
                  className="text-center"
                />
              </label>
            </div>

            <table className="w-5/6 h-auto">
              <tr>
                <th className="text-left my-2">Name</th>
                <th className="text-left my-2" colSpan={4}>
                  Email
                </th> 
                <th className="text-left my-2">Status</th>
                <th className="text-left my-2">Block/Unblock</th>
                <th className="text-left my-2">Delete</th>
              </tr>
           
         
              <tr>
                <td className="my-2">Sony</td>
                <td colSpan={4} className="my-2">sony2343@gmail.com</td>
                <td className="my-2">Active</td>
                <td> <span className="bg-red-500 p-1">Block</span></td>
                <td className="flex justify-start items-center my-2">
                  <span className=" bg-red-500 p-1 w-8 h-7 flex justify-center items-center"> <ion-icon name="trash-outline"></ion-icon></span>
                 </td>
              </tr>

              <tr>
                <td className="my-2">Sony</td>
                <td colSpan={4} className="my-2">sony2343@gmail.com</td>
                <td className="my-2">Active</td>
                <td> <span className="bg-red-500 p-1">Block</span></td>
                <td className="flex justify-start items-center my-2">
                  <span className=" bg-red-500 p-1 w-8 h-7 flex justify-center items-center"> <ion-icon name="trash-outline"></ion-icon></span>
                 </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;

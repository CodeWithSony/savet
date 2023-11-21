import React from "react";
import LeftSidebar from "../../pages/DashBoared/LeftSidebar";
import MainBar from "../../pages/DashBoared/MainBar";
// 1
const UserManagement = () => {
  return (
    <div className="flex w-12/12  bg-sky-400 h-screen gap-x-6 mt-[2rem]">
      <LeftSidebar />
      <div className="flex flex-col w-full bg-green-800 justify-around items-center h-screen">
        <div className="flex w-full flex-col bg-black text-white items-center m">
          <h2>User</h2>

          <div className="flex w-3/4 justify-between items-center flex-col">
            <div className="flex w-3/4 justify-between items-center">
              <label htmlFor="entries" className="flex w-2/4">
                Show
                <input
                  type="number"
                  name="number"
                  id="entries"
                  min="1"
                  max="10"
                  placeholder="Between 1 to 10"
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

            <table className="w-3/4 h-auto">
              <tr>
                <th className="text-left">Name</th>
                <th className="text-left" colSpan={4}>
                  Email
                </th>
                <th className="text-left">Status</th>
                <th className="text-left">Block/Unblock</th>
                <th className="text-left">Delete</th>
              </tr>
              <tr>
                <td>Sony</td>
                <td colSpan={4}>sony2343@gmail.com</td>
                <td>Active</td>
                <td>Block</td>
                <td>
                  <span className="w-[2rem] bg-red-500"> <ion-icon name="trash-outline"></ion-icon></span>
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

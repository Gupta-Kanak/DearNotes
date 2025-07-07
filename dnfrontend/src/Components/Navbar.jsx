import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import "./Navbar.css";

function Navbar() {
  const navigateTo = useNavigate();
  const handleClick = (e) => {
    localStorage.removeItem("auth-token");
    navigateTo("/login");
  };
  return (
    <>
      <div className=" bg-[#646278]/50 border-2  border-[#4b5563]/30 sticky top-0 z-50">
        <nav className="flex justify-between p-2 items-center text-[#A9B0C6]">
          <FontAwesomeIcon icon={faBookOpen} className="text-[2rem] px-4" />
          <div className="flex items-center justify-center">
            <h1 className="text-[2rem] font-[Verdana]"> Dear </h1>

            <img src="../../cat.svg" alt="" className="h-[4rem]" />
            <h1 className="text-[2rem] font-[Verdana]"> Notes </h1>
          </div>
          {localStorage.getItem("auth-token") ? (
            <button
              onClick={handleClick}
              className="mx-6 px-4 py-2 bg-[#1F2232]/50 rounded-xl border-2 border-[#4b5563]/30 inset-shadow-sm inset-shadow-[#A9B0C6]/50 hover:bg-[#A9B0C6] hover:text-[#1F2232] hover:cursor-pointer text-[1.3rem]"
            >
              Log Out
            </button>
          ) : (
            <div></div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;

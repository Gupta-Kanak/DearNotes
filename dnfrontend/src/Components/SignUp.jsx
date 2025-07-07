import React from "react";
import { useNavigate } from "react-router";
import "./Login.css";
import Navbar from "./Navbar";

function SignUp() {
  let navigateTo = useNavigate();
  let handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(e.target);
    let name = e.target.name.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    //console.log(name);
    let url = "http://localhost:8000/api/auth/createUser";
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (data.result === "Success") {
      localStorage.setItem("auth-token", data.authToken);
      navigateTo("/");
    } else {
      alert(data.message);
    }
  };

  let handleLogin = (e) => {
    e.preventDefault();
    navigateTo("/login");
  };

  return (
    <>
      <div className="bg-[#1F2232] bg-cover bg-center bg-dot-pattern h-screen w-screen ">
        <div className="h-screen w-screen backdrop-blur-[2px] ">
          <Navbar />
          <div className="flex justify-center items-center h-[75vh]">
            <div className=" bg-[#646278]/15 rounded-2xl border-2 border-[#4b5563]/30 shadow-lg">
              <form
                onSubmit={handleSubmit}
                className="p-6 text-[#A9B0C6] text-[1.3rem]"
              >
                <div className="p-3 pb-2">
                  <label htmlFor="name" className="font-serif">
                    User Name :
                  </label>
                </div>
                <div className="p-3 pt-0 ">
                  <input
                    type="text"
                    id="name"
                    className="w-[40vw]  bg-[#A9B0C6] text-[#1F2232] text-[1.2rem] rounded"
                  />
                </div>
                <div className="p-3 pb-2">
                  <label htmlFor="Email address" className="font-serif">
                    Email Address :
                  </label>
                </div>
                <div className="p-3 pt-0 ">
                  <input
                    type="email"
                    id="email"
                    className="w-[40vw]  bg-[#A9B0C6] text-[#1F2232] text-[1.2rem] rounded"
                  />
                </div>
                <div className="p-3 pb-2">
                  <label htmlFor="Password" className="font-serif">
                    Password :
                  </label>
                </div>
                <div className="p-3 pt-0 ">
                  <input
                    type="password"
                    id="password"
                    className="w-[40vw]  bg-[#A9B0C6] text-[#1F2232] text-[1.2rem] rounded"
                  />
                </div>
                <div className="p-3 flex justify-center">
                  <button
                    type="Submit"
                    className="mx-6 px-6 py-3 bg-[#1F2232]/50 rounded-xl border-2 border-[#4b5563]/30 inset-shadow-sm inset-shadow-[#A9B0C6]/100 inset-ring-2 hover:bg-[#A9B0C6] hover:text-[#1F2232] hover:cursor-pointer "
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={handleLogin}
                    className="mx-6 px-6 py-3 bg-[#1F2232]/50 rounded-xl border-2 border-[#4b5563]/30 inset-shadow-sm inset-shadow-[#A9B0C6]/50 hover:bg-[#A9B0C6] hover:text-[#1F2232] hover:cursor-pointer"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;

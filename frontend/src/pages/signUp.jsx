import { useState } from "react";
import Link from "next/link";
import cors from "cors";

const signUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const API_ENDPOINT = "http://localhost:3033/users";

  const fetchUsers = async () => {
    try {
      const res = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = () => {
    fetchUsers();
  };

  return (
    <div className="w-screen h-screen flex">
      <div className="w-6/12 flex justify-center items-center">
        <div className="w-[600px] bg-white flex flex-col items-center gap-[40px] p-4  ">
          <div className="flex items-center gap-3">
            <img src="beer.svg" alt="" width={35} />
            <h1 className=" font-bold text-black  text-4xl">aiRo!</h1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-black text-4xl">Create account</h1>
            <p className=" text-gray-600 text-lg">
              Sign up below to create your Wallet account{" "}
            </p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <label className="input input-bordered flex items-center gap-2 h-[70px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                onChange={(event) => {
                  setName(event.target.value);
                }}
                type="text"
                className="grow"
                placeholder="Name"
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 h-[70px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                type="text"
                className="grow"
                placeholder="Email"
              />
            </label>

            <label className="input input-bordered flex items-center gap-2  h-[70px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                type="password"
                className="grow"
                value={password}
              />
            </label>
            <button
              onClick={addUser}
              href={"/loading"}
              className="btn bg-[#3b82f6] border-none text-white rounded-full  h-[70px]  font-normal	text-xl"
            >
              Sign up
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-black">Already have an account?</p>
            <Link href={"/login"} className="btn btn-link ">
              Sign in
            </Link>
          </div>
        </div>
      </div>
      <div className="w-6/12 bg-blue-500	">a</div>
    </div>
  );
};

export default signUp;

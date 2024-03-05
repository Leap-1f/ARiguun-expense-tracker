export const SignUp = () => {
  return (
    <div className="w-[600px] bg-white flex flex-col items-center gap-[40px] p-4  ">
      <div className="flex items-center gap-3">
        <img src="beer.svg" alt="" width={35} />
        <h1 className=" font-bold text-black  text-4xl">aiRo!</h1>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-black text-4xl">Welcome back</h1>
        <p className=" text-gray-600 text-lg">
          Welcome back, Please enter your details
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
          <input type="text" className="grow" placeholder="Email" />
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
          <input type="password" className="grow" value="password" />
        </label>
        <button class="btn bg-[#3b82f6] border-none text-white rounded-full  h-[70px]  font-normal	text-xl">
          Button
        </button>
      </div>
      <div className="flex gap-2 items-center">
        <p className="text-black">Dont`t have account?</p>
        <button className="btn btn-link ">Sign up</button>
      </div>
    </div>
  );
};

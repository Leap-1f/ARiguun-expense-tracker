import { LogoAndNAme } from "@/components/Layouts/LogoAndName";
import Link from "next/link";

const goodJob = () => {
  return (
    <div className="w-screnn h-screen flex flex-col  items-center p-[100px] gap-[144px] ">
      <div className="flex flex-col items-center gap-10 ">
        <div className="flex gap-3">
          <LogoAndNAme />
        </div>
        <ul className="steps w-[500px]">
          <li className="step step-primary">Currency</li>
          <li className="step   step-primary">Balance</li>
          <li className="step step-primary">Finish</li>
        </ul>
      </div>
      <div className="flex flex-col items-center mt-[140px] gap-5 w-[400px] ">
        <div className="flex flex-col  items-center gap-5">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex justify-center items-center">
            <img src="check.svg" className="w-14" alt="" />
          </div>
          <h1 className=" text-white text-3xl">Good Job!</h1>
        </div>

        <p className="text-center	">
          Your very first account has been created. Now continue to dashboard
          and start tracking
        </p>
        <Link
          href={"/"}
          className="btn  bg-blue-600 text-white w-full rounded-full"
        >
          Go to dashboard
        </Link>
      </div>
    </div>
  );
};

export default goodJob;

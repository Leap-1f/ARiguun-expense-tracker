import { LogoAndNAme } from "@/Components/Layouts/LogoAndName";
import Link from "next/link";
const loading = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-10 items-center justify-center ">
      <div className="flex gap-3">
        <LogoAndNAme />
      </div>
      <div className="flex flex-col items-center gap-3">
        <span className="loading loading-spinner text-info w-[50px]"></span>
        <p>Ta түр хүлээнэ үү...</p>
        <Link
          href={"/confirm"}
          class="btn bg-[#3b82f6] border-none text-white rounded-full  h-[70px]  font-normal	text-xl"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};
export default loading;

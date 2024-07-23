import Image from "next/image";
import { cn, IS_FIRST, RTrafficBg } from "@/utils";

const Traffic = () => {
  return (
    <div
      className={cn("h-[50vw] w-full flex flex-col pb-[3rem]", {
        "bg-[#E64921]/5": !IS_FIRST,
      })}>
      <div className="flex justify-center items-center mt-[6.625rem] mb-[2.875rem]">
        <span className={cn("text-[2.1875rem]", IS_FIRST ? "text-[#9164FF]" : "text-[#E64921] ")}>全网流量</span>
        <span className={cn("text-[1.75rem]", IS_FIRST ? "text-white" : "text-[#221F1F]")}>
          -海量直连媒体拥有优先挑量权，流量质量、规模有保障
        </span>
      </div>
      <div className="w-[82.3%] flex-1 my-0 mx-auto overflow-hidden">
        <Image src={RTrafficBg} alt="" className="block h-full" />
      </div>
    </div>
  );
};

export default Traffic;

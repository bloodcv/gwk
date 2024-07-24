import Image from "next/image";
import { cn, IS_FIRST, RTrafficBg } from "@/utils";

const Traffic = () => {
  return (
    <div
      className={cn("md:h-[80vh] h-[60vh] w-full flex flex-col pb-[3rem]", {
        "bg-[#E64921]/5": !IS_FIRST,
      })}>
      <div className="flex flex-col md:flex-row justify-center items-center mt-[6.625rem] md:mb-[2.875rem] mb-5 px-9">
        <span
          className={cn(
            "text-[2.1875rem] text-nowrap",
            IS_FIRST ? "text-[#9164FF]" : "text-[#E64921] "
          )}>
          全网流量
        </span>
        <span
          className={cn(
            "text-[1.75rem] md:block hidden",
            IS_FIRST ? "text-white" : "text-[#221F1F]"
          )}>
          -
        </span>
        <span
          className={cn(
            "text-[1.75rem]",
            IS_FIRST ? "text-white" : "text-[#221F1F]"
          )}>
          海量直连媒体拥有优先挑量权，流量质量、规模有保障
        </span>
      </div>
      <div className="flex-1 my-0 mx-auto overflow-hidden px-5 max-w-[98.75rem] flex items-center">
        {/* <Image src={RTrafficBg} alt=""  className="block object-contain my-0 mx-auto" /> */}
        <Image src={RTrafficBg} alt=""  className="block h-full object-contain max-w-full my-0 mx-auto" />
      </div>
    </div>
  );
};

export default Traffic;

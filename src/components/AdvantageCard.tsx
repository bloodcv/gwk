import { cn, IS_FIRST } from "@/utils";
import Image from "next/image";
import { TAdvantageListItem } from "@/components/Advantage";

const AdvantageCard = ({ titleIcon, title, desc }: TAdvantageListItem) => {
  return (
    <div
      className={cn(
        "max-w-[22.5rem] lg:w-[20vw] md:w-[25vw] w-[80vw] max-h-[42.625rem] h-[70vh] pt-[4.125rem] px-[1.375rem] rounded-3xl overflow-hidden",
        IS_FIRST ? "bg-qx-advantage-card" : "bg-ym-advantage-card"
      )}>
      <div className="w-full my-0 mx-auto">
        {/* <div className="w-full flex justify-center items-center"> */}
          <Image
            alt=""
            src={titleIcon}
            className="block max-w-[19.75rem] w-full h-auto my-0 mx-auto"
          />
        {/* </div> */}
        <div
          className={cn(
            "w-[8rem] h-1 mt-[2.1875rem] mb-[4.375rem] mx-auto",
            IS_FIRST ? "bg-[#7A53DA]" : "bg-[#E64921]"
          )}></div>
      </div>
      <span
        className={cn(
          "inline-block text-2xl w-full text-left mb-8",
          IS_FIRST ? "text-white" : "text-[#221F1F]"
        )}>
        {title}
      </span>
      <p
        className={cn(
          "text-xl leading-7 w-full text-left",
          IS_FIRST ? "text-white/80" : "text-[#221F1F]/80"
        )}>
        {desc}
      </p>
    </div>
  )
};

export default AdvantageCard;

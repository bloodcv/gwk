import { TAdvantageListItem } from "@/app/advantage/page";
import { cn, IS_FIRST } from "@/utils";
import Image from "next/image";

const AdvantageCard = ({ titleIcon, title, desc }: TAdvantageListItem) => {
  return (
    <div
      className={cn(
        "w-[22.5rem] h-[42.625rem] pt-[4.125rem] px-[1.375rem] rounded-3xl overflow-hidden",
        IS_FIRST ? "bg-qx-advantage-card" : "bg-ym-advantage-card"
      )}>
      <div className="w-fit my-0 mx-auto">
        <Image
          alt=""
          src={titleIcon}
          className="block w-[11.1875rem] h-[7.5625rem]"
        />
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

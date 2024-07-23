import { cn, IS_FIRST } from "@/utils";

const Footer = () => {
  return (
    <div
      className={cn("w-full py-[1.25rem] text-center", {
        "bg-[#40261B]": !IS_FIRST,
      })}>
      <h1 className="text-white text-sm leading-[1.25rem]">
        {IS_FIRST ? "京ICP备2024052200号" : "京ICP备2020048288号"}
      </h1>
    </div>
  );
};

export default Footer;

import { cn, IS_FIRST, RSituation1, RSituation2, RSituation3, RSituation4, RSituation5 } from "@/utils";
import Image from "next/image";

const Situation = () => {
  const situationList = [
    {
      icon: RSituation1,
      desc: "开屏",
    },
    {
      icon: RSituation2,
      desc: "信息流",
    },
    {
      icon: RSituation3,
      desc: "Banner",
    },
    {
      icon: RSituation4,
      desc: "激励视频",
    },
    {
      icon: RSituation5,
      iconClassName: "w-full",
      desc: "视频贴片",
    },
  ];

  return (
    <div className={cn("w-full pb-[15vh]", IS_FIRST ? "bg-[#B5AAD5]" : "bg-[#F0F2F5]")}>
      <div className="flex justify-center items-center mt-[3.75rem] mb-[5rem]">
        <span className={cn("text-[2.1875rem]", IS_FIRST ? "text-[#9164FF]" : "text-[#E64921]")}>资源形式</span>
      </div>
      <ul className={cn("relative flex md:flex-nowrap flex-wrap justify-around w-full md:after:block after:hidden after:absolute after:content-[''] after:left-0 after:right-0 after:h-1/2 after:bottom-0", IS_FIRST? "after:bg-[#7A53DA]": "after:bg-[#E64921]")}>
        {situationList.map((_, idx) => (
          <li key={idx} style={{"boxShadow": "0px 2px 30px 0px rgba(0,0,0,0.1)"}} className="relative z-[2] md:mb-0 mb-10 rounded-3xl overflow-hidden md:w-[16%] w-[40%] bg-white pb-4 pt-6 px-7 flex flex-col justify-center">
            <div className="mb-[1.1875rem] flex-1 w-full flex items-center justify-center">
              <Image src={_.icon} alt="" className={cn('block', _.iconClassName ? _.iconClassName : 'h-full')} />
            </div>
            <span className="font-semibold text-[#333333] text-xl text-center">
              {_.desc}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Situation;

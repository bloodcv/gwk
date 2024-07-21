import SituationIcon1 from "@/assets/situation1.png";
import SituationIcon2 from "@/assets/situation2.png";
import SituationIcon3 from "@/assets/situation3.png";
import SituationIcon4 from "@/assets/situation4.png";
import SituationIcon5 from "@/assets/situation5.png";
import { cn } from "@/utils";
import Image from "next/image";

const Situation = () => {
  const situationList = [
    {
      icon: SituationIcon1,
      desc: "开屏",
    },
    {
      icon: SituationIcon2,
      desc: "信息流",
    },
    {
      icon: SituationIcon3,
      desc: "Banner",
    },
    {
      icon: SituationIcon4,
      desc: "激励视频",
    },
    {
      icon: SituationIcon5,
      iconClassName: "w-full",
      desc: "视频贴片",
    },
  ];

  return (
    <div className="h-[50vw] w-full bg-[#B5AAD5]">
      <div className="flex justify-center items-center mt-[3.75rem] mb-[5rem]">
        <span className="text-[#9164FF] text-[2.1875rem]">资源形式</span>
      </div>
      <ul className="relative flex justify-center space-x-[3.125rem] *:relative *:z-[2] *:rounded-3xl *:overflow-hidden *:h-[29.64vw] *:w-[15.6vw] *:bg-white *:pb-4 *:pt-6 *:px-7 *:flex *:flex-col *:justify-center w-full after:absolute after:content-[''] after:left-0 after:right-0 after:h-1/2 after:bottom-0 after:bg-[#7A53DA]">
        {situationList.map((_, idx) => (
          <li key={idx}>
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

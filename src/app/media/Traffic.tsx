import Image from "next/image";
import TrafficBg from '@/assets/trafficBg.png'

const Traffic = () => {
  return (
    <div className="h-[50vw] w-full flex flex-col pb-[3rem] bg-[#E64921]/5">
      <div className="flex justify-center items-center mt-[6.625rem] mb-[2.875rem]">
        <span className="text-[#E64921] text-[2.1875rem]">全网流量</span><span className="text-[#221F1F] text-[1.75rem]">-海量直连媒体拥有优先挑量权，流量质量、规模有保障</span>
      </div>
      <div className="w-[82.3%] flex-1 my-0 mx-auto overflow-hidden">
        <Image src={TrafficBg} alt="" className="block h-full"  />
      </div>
    </div>
  );
}

export default Traffic

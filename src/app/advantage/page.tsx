import { StaticImageData } from 'next/image';
import AdvantageCard from '@/components/AdvantageCard';
import { cn, IS_FIRST, RAntiCheat, RDmp, RPassValid } from '@/utils';

export type TAdvantageListItem = {
  titleIcon: StaticImageData;
  title: string;
  desc: string;
}

const Advantage = () => {
  
  const advantageLists: TAdvantageListItem[] = [
    {
      titleIcon: RPassValid,
      title: '全媒体先投后审',
      desc: '先投后审：与媒体深度合作，打通全媒体素材与广告主先投后审链路，最大化广告曝光率和时效性'
    },
    {
      titleIcon: RDmp,
      title: 'DMP',
      desc: '丰富的DMP：基于多年为阿里、京东、拼多多、美团、厂商等客户供给和服务，并参与大促活动，积累了丰富的电商人群标签。以丰富的DMP能力，为广告主提供流量预筛选和人群定向能力。'
    },
    {
      titleIcon: RAntiCheat,
      title: '反作弊',
      desc: '完善的反作弊：基于市场主流监测公司的异常流量规则，结合头部广告主流量判定标准和自有的设备库，对异常流量进行投前、后过滤，最大化降低广告主投放成本。'
    },
  ]

  return (
    <div className="flex-1">
      <h1 className={cn("text-[2.5rem] leading-[3.5rem] mt-[6.5625rem] mb-[3.3125rem] text-center", IS_FIRST ? "text-[#9164FF]" : "text-[#E64921]")}>我们的优势</h1>
      <ul className='w-full flex justify-center space-x-[3.75rem]'>
        {
          advantageLists.map((_, idx) => (<li key={idx}>
            <AdvantageCard {..._} />
          </li>))
        }
      </ul>
    </div>
  );
}

export default Advantage
import { TAdvantageListItem } from "@/app/advantage/page"
import Image from 'next/image'

const AdvantageCard = ({
  titleIcon,
  title,
  desc
}: TAdvantageListItem) => {
  return (
    <div className="w-[22.5rem] h-[42.625rem] bg-advantage-card pt-[4.125rem] px-[1.375rem] rounded-3xl overflow-hidden">
      <div className="w-fit my-0 mx-auto">
        <Image alt='' src={titleIcon} className="block w-[11.1875rem] h-[7.5625rem]" />
        <div className="bg-[#E64921] w-[8rem] h-1 mt-[2.1875rem] mb-[8.1875rem] my-0 mx-auto"></div>
      </div>
      <span className="inline-block text-2xl text-[#221F1F] w-full text-left mb-8">{title}</span>
      <p className="text-[#221F1F]/80 text-xl leading-7 w-full text-left">{desc}</p>
    </div>
  )
}

export default AdvantageCard
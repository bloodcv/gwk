import { cn, ENV, Env, IS_FIRST } from "@/utils";

const Home = () => {
  const contentList = {
    [ENV.QX]: [
      "北京林开志奇广告有限公司成立于2020年，是一家链接媒体和广告主的全域营销技术服务商，在程序化投放、媒体代理、媒体商业化等业务领域深耕。",
      "公司旗下的七喜联盟，为淘宝、京东、拼多多、苏宁、唯品会等众多国内外500强企业提供程序化广告服务。",
      "公司目前拥有100多家优质媒体资源，媒体类型覆盖内容、视频、工具、金融、社交、资讯等多行业；同时已全面引入主流的小程序和私域流量。",
      "公司目前拥有100多家优质媒体资源，媒体类型覆盖内容、视频、工具、金融、社交、资讯等多行业；同时已全面引入主流的小程序和私域流量。",
    ],
    [ENV.YM]: [
      "北京笑然信息科技有限公司成立于2020年，是一家链接媒体和广告主的全域营销技术服务商，在程序化投放、媒体代理、媒体商业化等业务领域深耕。",
      "公司旗下的七喜联盟，为淘宝、京东、拼多多、苏宁、唯品会等众多国内外500强企业提供程序化广告服务。",
      "公司目前拥有100多家优质媒体资源，媒体类型覆盖内容、视频、工具、金融、社交、资讯等多行业；同时已全面引入主流的小程序和私域流量。",
      "同时，公司以丰富的DMP标签能力，为主流的电商、游戏、本地生活等广告主提供了精细化营销。",
    ],
  };

  return (
    <div
      style={{ backgroundSize: "100% 100%" }}
      className={
        cn("pt-[3.5625rem] bg-no-repeat h-screen relative", IS_FIRST ? "bg-[url('/assets/aboutUsBg.png')]" : "bg-[url('/assets/aboutUsBg2.png')]")
      }>
      <div
      className={
        cn("absolute left-0 bottom-0 w-[48.95%] rounded-tr-[12.25rem] px-[4.6875rem] pb-[0.875rem] pt-[1.8125rem]", IS_FIRST ? "bg-[#7A53DA] opacity-70" : "bg-about-us-tip")
      }
      
      >
        <h1 className="text-white w-fit mb-[2.25rem] font-semibold text-xl leading-7 relative after:absolute after:content-[''] after:h-1 after:left-0 after:right-0 after:-bottom-4 after:bg-white">
          关于我们
        </h1>
        <ul className="flex flex-col space-y-8 mb-8 *:*:text-lg *:*:leading-[1.5625rem] *:*:text-white">
          {contentList[Env].map((_, idx) => (
            <li key={idx}>
              <p>{_}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

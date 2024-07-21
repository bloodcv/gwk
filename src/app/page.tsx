const Home = () => {
  return (
    <div
      style={{ backgroundSize: "100% 100%" }}
      className="pt-[3.5625rem] bg-no-repeat bg-[url('/assets/aboutUsBg.png')] flex-1 relative">
      <div className="absolute left-0 bottom-0 bg-about-us-tip w-[48.95%] rounded-tr-[12.25rem] px-[4.6875rem] pb-[0.875rem] pt-[1.8125rem]">
        <h1 className="text-white w-fit mb-[2.25rem] font-semibold text-xl leading-7 relative after:absolute after:content-[''] after:h-1 after:left-0 after:right-0 after:-bottom-4 after:bg-white">
          关于我们
        </h1>
        <ul className="flex flex-col space-y-8 mb-8 *:*:text-lg *:*:leading-[1.5625rem] *:*:text-white">
          <li>
            <p>
              北京笑然广告有限公司成立于2020年，是一家链接媒体和广告主的全域营销技术服务商，在程序化投放、媒体代理、媒体商业化等业务领域深耕。
            </p>
          </li>
          <li>
            <p>
              公司旗下的七喜联盟，为淘宝、京东、拼多多、苏宁、唯品会等众多国内外500强企业提供程序化广告服务。
            </p>
          </li>
          <li>
            <p>
              公司目前拥有100多家优质媒体资源，媒体类型覆盖内容、视频、工具、金融、社交、资讯等多行业；同时已全面引入主流的小程序和私域流量。
            </p>
          </li>
          <li>
            <p>
              同时，公司以丰富的DMP标签能力，为主流的电商、游戏、本地生活等广告主提供了精细化营销。
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

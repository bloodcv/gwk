import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn, IS_FIRST, RLogo, RQrCode } from "@/utils";
import { PAGE } from "@/components/Layout";

const ConnectUs = ({
  show
}: {
  show?: boolean
}) => {
  return (
    <div className={cn("absolute left-0 hidden group-hover:block", {
      "block": show
    })}>
      <div className="h-3"></div>
      <div
        className={cn(
          "w-[20.5rem] h-[20.5rem] bg-white rounded-[0.625rem] flex flex-col space-y-[0.75rem] items-center border border-solid border-[#E7DEDC]",
          {
            // "border border-solid border-[#E7DEDC]": !IS_FIRST
          }
        )}>
        <h2 className="text-black text-lg leading-6 mt-[1.4375rem]">
          微信扫一扫
        </h2>
        <div className="w-[15.4375rem] h-[15.4375rem] border border-dashed border-black/40">
          <Image src={RQrCode} alt="" className="block w-full h-full" />
        </div>
      </div>
    </div>
  );
};

const Nav = ({
  page,
  changePage,
}: {
  page: PAGE;
  changePage: (page: PAGE) => void;
}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showConnect, setShowConnect] = useState<boolean>(false);

  const routerList: { href?: PAGE; name: string }[] = [
    {
      href: "home",
      name: "关于我们",
    },
    {
      href: "media",
      name: "媒体资源",
    },
    {
      href: "advantage",
      name: "平台优势",
    },
    {
      name: "联系我们",
    },
  ];

  return (
    <>
      <div
        style={
          IS_FIRST
            ? {}
            : {
                boxShadow: "0px 2px 9px 0px rgba(213,213,213,0.5)",
              }
        }
        className={cn(
          "hidden fixed z-[10] top-0 min-w-[67.5rem] w-screen h-[3.5625rem] pl-[4.375rem] md:flex items-center justify-start",
          IS_FIRST ? "backdrop-blur" : "bg-white/80"
        )}>
        <div
          className={cn(
            "cursor-pointer",
            IS_FIRST ? "w-[7.375rem]" : "w-[11rem]"
          )}
          onClick={() => changePage("home")}>
          <Image src={RLogo} alt="" className="block w-full" />
        </div>
        {/* <ul className="*:*:after:-bottom-5 *:*:after:left-0 *:*:after:right-0 *:*:after:h-1 *:*:after:bg-[#7A53DA] *:*:after:opacity-0 *:*:after:transition-opacity"> */}
        <ul
          className={cn(
            "flex justify-start space-x-[2.9375rem] ml-[4.3125rem] h-full items-center *:*:text-sm *:*:leading-5 *:*:relative *:*:after:content-[''] *:*:after:absolute *:*:after:-bottom-5 *:*:after:left-0 *:*:after:right-0 *:*:after:h-1 *:*:after:opacity-0 *:*:after:transition-all",
            IS_FIRST
              ? "*:*:text-sm *:*:text-white *:*:after:bg-[#7A53DA]"
              : "*:*:text-[#221F1F] *:*:after:bg-[#E64921]"
          )}>
          {routerList.map(_ => (
            <li
              key={_.name}
              className={cn("h-full flex items-center cursor-pointer", {
                "*:after:opacity-100": page === _.href,
                "*:text-[#E64921]": page === _.href && !IS_FIRST,
              })}
              onClick={() => {
                if (!_.href) return;
                changePage(_.href);
              }}>
              {_.href ? (
                <div
                  className={cn("hover:after:opacity-100 duration-500", {
                    "hover:text-[#E64921]": !IS_FIRST,
                  })}>
                  {_.name}
                </div>
              ) : (
                <div
                  className={cn("cursor-pointer group", {
                    "hover:text-[#E64921]": !IS_FIRST,
                  })}>
                  {_.name}
                  <ConnectUs />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div
        style={
          IS_FIRST
            ? {}
            : {
                boxShadow: "0px 2px 9px 0px rgba(213,213,213,0.5)",
              }
        }
        className={cn(
          "md:hidden fixed z-[10] top-0 w-full h-[3.5625rem] flex items-center justify-center",
          IS_FIRST ? "bg-[#191130]" : "bg-white/80"
        )}>
        {menuOpen ? (
          <svg
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 absolute right-10 cursor-pointer"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <path
              className={cn(IS_FIRST ? "fill-[#7A53DA]" : "fill-[#333]")}
              d="M155.00305177 868.99694823c-21.96904297-21.96904297-21.96904297-60.41486817 0-82.38391112l631.60998534-631.60998534c21.96904297-21.96904297 60.41486817-21.96904297 82.38391112 0s21.96904297 60.41486817 0 82.38391112l-631.60998534 631.60998534c-21.96904297 21.96904297-60.41486817 21.96904297-82.38391112 0z"></path>
            <path
              className={cn(IS_FIRST ? "fill-[#7A53DA]" : "fill-[#333]")}
              d="M155.00305177 155.00305177c21.96904297-21.96904297 60.41486817-21.96904297 82.38391112 0l631.60998534 631.60998534c21.96904297 21.96904297 21.96904297 60.41486817 0 82.38391112s-60.41486817 21.96904297-82.38391112 0l-631.60998534-631.60998534c-21.96904297-21.96904297-21.96904297-60.41486817 0-82.38391112z"></path>
          </svg>
        ) : (
          <svg
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-10 h-10 absolute right-10 cursor-pointer"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <path
              className={cn(IS_FIRST ? "fill-[#7A53DA]" : "fill-[#333]")}
              d="M888.838 319.775l-751.1 0c-23.944 0-43.339-19.553-43.339-43.646l0-40.012c0-24.093 19.395-43.645 43.339-43.645l751.1 0c23.923 0 43.334 19.554 43.334 43.645l0 40.012c-0.001 24.093-19.411 43.646-43.333 43.646l0 0zM888.838 587.509l-751.1 0c-23.944 0-43.339-19.533-43.339-43.64l0-39.998c0-24.115 19.395-43.647 43.339-43.647l751.1 0c23.923 0 43.334 19.533 43.334 43.647l0 39.998c-0.001 24.107-19.411 43.64-43.333 43.64l0 0zM888.838 876.17l-751.1 0c-23.944 0-43.339-19.532-43.339-43.627l0-40.017c0-24.093 19.395-43.641 43.339-43.641l751.1 0c23.923 0 43.334 19.548 43.334 43.641l0 40.017c-0.001 24.094-19.411 43.627-43.333 43.627l0 0z"></path>
          </svg>
        )}
        <div
          className={cn(
            "cursor-pointer",
            IS_FIRST ? "w-[7.375rem]" : "w-[11rem]"
          )}
          onClick={() => changePage("home")}>
          <Image src={RLogo} alt="" className="block w-full" />
        </div>
        {menuOpen && (
          <ul
            className={cn(
              "absolute flex flex-col top-full left-0 right-0 backdrop-blur items-center *:*:text-sm *:*:leading-5",
              IS_FIRST
                ? "*:*:text-sm *:*:text-white bg-[#7A53DA]/40"
                : "*:*:text-[#221F1F]"
            )}>
            {routerList.map(_ => (
              <li
                key={_.name}
                className={cn("w-full flex items-center justify-center cursor-pointer h-14 group *:font-bold *:text-lg", IS_FIRST ? "hover:bg-[#7A53DA]" : "hover:bg-[#E64921]/70 hover:text-white",{
                  "bg-[#7A53DA]": page === _.href && IS_FIRST,
                  "bg-[#E64921]/70 *:text-white": page === _.href && !IS_FIRST,
                })}
                onClick={() => {
                  if (!_.href) return
                  changePage(_.href);
                  setMenuOpen(false)
                }}>
                {_.href ? (
                  <div
                    className={cn("duration-500", {
                      "group-hover:text-white": !IS_FIRST
                    })}>
                    {_.name}
                  </div>
                ) : (
                  <div
                    className={cn("cursor-pointer group", {
                      "group-hover:text-white": !IS_FIRST
                    })}>
                    {_.name}
                    <ConnectUs show={showConnect} />
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Nav;

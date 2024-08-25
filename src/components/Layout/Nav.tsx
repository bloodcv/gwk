import Image from "next/image";
import Logo from "@/assets/logo.png";
import QrCode from "@/assets/qrCode.png";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";

const ConnectUs = () => {
  return (
    <div className="absolute left-0 hidden group-hover:block">
      <div className="h-3"></div>
      <div className="w-[20.5rem] h-[20.5rem] bg-white rounded-[0.625rem] flex flex-col space-y-[0.75rem] items-center">
        <h2 className="text-black text-lg leading-6 mt-[1.4375rem]">微信扫一扫</h2>
        <div className="w-[15.4375rem] h-[15.4375rem] border border-dashed border-black/40">
          <Image src={QrCode} alt="" className="block w-full h-full" />
        </div>
      </div>
    </div>
  )
}

const Nav = () => {
  const pathname = usePathname();

  useEffect(() => {
    console.log('pathname', pathname);
    
  }, [pathname])

  const routerList: { href?: string; name: string }[] = [
    {
      href: "/",
      name: "关于我们",
    },
    {
      href: "/media/",
      name: "媒体资源",
    },
    {
      href: "/advantage/",
      name: "平台优势",
    },
    {
      name: "联系我们",
    },
  ];

  return (
    <div className="fixed z-[2] top-0 min-w-[67.5rem] w-screen h-[3.5625rem] bg-white/80 backdrop-blur pl-[18.54%] flex items-center justify-start">
      <Link href='/' className=" w-[11rem]">
        <Image src={Logo} alt="" className="block w-full" />
      </Link>
      <ul className="flex justify-start space-x-[2.9375rem] ml-[4.3125rem] items-center *:*:text-sm *:*:text-[#221F1F] *:*:leading-5 *:*:relative *:*:after:content-[''] *:*:after:absolute *:*:after:-bottom-5 *:*:after:left-0 *:*:after:right-0 *:*:after:h-1 *:*:after:bg-[#E64921] *:*:after:opacity-0 *:*:after:transition-all">
        {routerList.map(_ => (
          <li key={_.name} className={cn({
            '*:after:opacity-100 *:text-[#E64921]': pathname === _.href
          })}>
            {
              _.href ? <Link href={_.href} className="hover:after:opacity-100 hover:text-[#E64921] duration-500">{_.name}</Link> : <div className="cursor-pointer group hover:text-[#E64921]">{_.name}<ConnectUs /></div>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;

import "./globals.css";
import Layout from "@/components/Layout";
import { cn, IS_FIRST } from "@/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>{ IS_FIRST ? "七喜" : "优米DSP" }</title>
        <link rel="icon" href={ IS_FIRST ? "/qx.ico" : "/ym.ico" } />
      </head>
      <body className={cn("h-[100vh] overflow-y-auto", IS_FIRST ? "bg-[#191130]" : "bg-white")}>
        <Layout />
      </body>
    </html>
  );
}

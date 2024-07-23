import "./globals.css";
import Layout from "@/components/Layout";
import { cn, IS_FIRST } from "@/utils";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="https://example.com/image.ico"></link>
      </Head>
      <body className={cn(IS_FIRST ? "bg-[#191130]" : "bg-white")}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

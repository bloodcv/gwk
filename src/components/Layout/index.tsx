"use client";
import Nav from "@/components/Layout/Nav";
import { ReactNode, useState } from "react";
import Footer from "@/components/Layout/Footer";
import Media from "@/components/Media";
import Advantage from "@/components/Advantage";
import Home from "@/components/Home";

export type PAGE = "home" | "media" | "advantage";

const Layout = () => {
  const [page, setPage] = useState<PAGE>("home");

  return (
    <div className="min-h-full flex flex-col w-full overflow-x-hidden">
      <Nav page={page} changePage={(page: PAGE) => setPage(page)} />
      {page === "media" ? (
        <Media />
      ) : page === "advantage" ? (
        <Advantage />
      ) : (
        <Home />
      )}
      <Footer />
    </div>
  );
};

export default Layout;

"use client";
import Nav from "@/components/Layout/Nav";
import { ReactNode, useEffect, useState } from "react";
import Footer from "@/components/Layout/Footer";
import Media from "@/components/Media";
import Advantage from "@/components/Advantage";
import Home from "@/components/Home";

export type PAGE = "home" | "media" | "advantage";

const Layout = () => {
  const [page, setPage] = useState<PAGE>("home");

  useEffect(() => {
    const p = window.sessionStorage.getItem('page') || 'home'
    setPage(p as PAGE)
  }, [])

  return (
    <div className="min-h-full flex flex-col w-full overflow-x-hidden">
      <Nav page={page} changePage={(page: PAGE) => {
        setPage(page)
        window.sessionStorage.setItem('page', page)
      }} />
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

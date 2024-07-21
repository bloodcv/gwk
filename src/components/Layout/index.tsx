"use client"
import Nav from "@/components/Layout/Nav"
import { ReactNode } from "react"
import Footer from "@/components/Layout/Footer"

const Layout = ({
  children
}: {
  children: ReactNode
}) => {
  return (
    <div className="min-h-screen flex flex-col min-w-[67.5rem] w-screen overflow-x-auto">
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
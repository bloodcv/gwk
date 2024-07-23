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
    <div className="h-screen overflow-y-auto flex flex-col w-full overflow-x-hidden">
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
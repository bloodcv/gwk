import "./globals.css";
import Layout from "@/components/Layout";
import { cn } from "@/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-[#191130]'>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

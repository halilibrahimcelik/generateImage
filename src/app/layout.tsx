import type { Metadata } from "next";
import "./globals.css";
import { oswald, poppin } from "@/lib/fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "react-toastify/dist/ReactToastify.css";
import HeaderWrapper from "@/components/header/HeaderWrapper";

export const metadata: Metadata = {
  title: "Generate Image",
  description: "Generate your an image with your mind !",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${poppin.variable} ${oswald.variable} relative`}
      >
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>
        {children}
        <Footer />
      </body>
    </html>
  );
}

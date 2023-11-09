import type { Metadata } from "next";
import "./globals.css";
import { oswald, poppin } from "@/lib/fonts";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Generate Image",
  description: "Generate your an image with your mind !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppin.variable} ${oswald.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
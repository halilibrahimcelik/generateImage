import { Oswald, Poppins } from "next/font/google";

export const poppin = Poppins({
  subsets: ["latin"],
  weight: ["400", "300", "600", "500", "700"],
  variable: "--font-poppin",
});
export const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "300", "600", "500", "700"],
  variable: "--font-oswald",
});

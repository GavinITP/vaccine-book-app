import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moh Promt Mak",
  description:
    "Introducing MOH Promt Mak: Your Easy Vaccine Booking Solution. Book in seconds. Choose your center, date, and time effortlessly. Prioritize health and convenience – Book now!",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

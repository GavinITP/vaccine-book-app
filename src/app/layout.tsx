import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

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
      <body className={(inter.className, poppins.className)}>{children}</body>
    </html>
  );
};

export default RootLayout;

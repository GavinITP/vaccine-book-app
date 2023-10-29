import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextAuthProvider from "@/providers/NextAuthProvider";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import ReduxProvider from "@/redux/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Moh Promt Mak",
  description:
    "Introducing MOH Promt Mak: Your Easy Vaccine Booking Solution. Book in seconds. Choose your center, date, and time effortlessly. Prioritize health and convenience – Book now!",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <NextAuthProvider session={session}>
            <Navbar />
            {children}
          </NextAuthProvider>
        </ReduxProvider>
      </body>
    </html>
  );
};

export default RootLayout;

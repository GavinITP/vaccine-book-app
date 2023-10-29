import Link from "next/link";
import Logo from "./Logo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Button from "./Button";

const Navbar = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="fixed w-full z-10 bg-white">
      <div className="flex items-center justify-between px-28 py-3 shadow-md">
        <div className="flex gap-4">
          {session ? (
            <Button variant="outlined" size="base" href="/api/auth/signout">
              Sign out of {session.user?.name}
            </Button>
          ) : (
            <Button variant="filled" size="base" href="/api/auth/signin">
              Sign in
            </Button>
          )}

          <Button variant="filled" size="base" href="/mybooking">
            My Booking
          </Button>
        </div>
        <ul className="flex list-none gap-12 items-center text-gray-700 text-sm ml-auto">
          <li className="hover:text-blue-500 cursor-pointer">
            <Link href="/booking">Booking</Link>
          </li>

          <Logo />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import Button from "./Button";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 bg-white">
      <div className="flex items-center justify-between px-28 py-3 shadow-md">
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

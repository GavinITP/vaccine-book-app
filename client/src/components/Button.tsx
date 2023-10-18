import Link from "next/link";

interface Props {
  children?: React.ReactNode;
  variant: "outlined" | "filled";
  size: "base" | "lg";
  className?: string;
  href: string;
}

const Button = ({ children, variant, size, className, href }: Props) => {
  const variantStyle =
    variant === "outlined"
      ? "bg-white outline outline-1 outline-gray-500 text-black"
      : "bg-blue-700 border-0 shadow-md text-white";

  const sizeStyle =
    size === "base" ? "text-sm px-4 py-2" : "text-base px-5 py-2";

  return (
    <Link href={href}>
      <button
        className={`${variantStyle} ${sizeStyle} ${className} rounded-lg hover:scale-105 hover:transition-transform`}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;

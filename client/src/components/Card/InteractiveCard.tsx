"use client";

interface Props {
  children: React.ReactNode;
}

const InteractiveCard = ({ children }: Props) => {
  return (
    <div
      className="w-min-[90%] max-w-[300px] mx-auto overflow-hidden bg-white shadow-md
    hover:shadow-xl hover:bg-neutral-200 rounded-2xl hover:scale-[1.02] duration-200"
    >
      {children}
    </div>
  );
};

export default InteractiveCard;

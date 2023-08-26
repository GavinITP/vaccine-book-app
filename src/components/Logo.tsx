import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/../logo.png"
        alt="Moh Prompt Mak logo"
        width="30"
        height="30"
      />
      <div>
        <p className="text-xl font-extrabold uppercase">mpm</p>
        <p className="text-[0.5rem] font-light capitalize">moh promt mak</p>
      </div>
    </div>
  );
};

export default Logo;

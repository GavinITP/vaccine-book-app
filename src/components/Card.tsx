import Image from "next/image";
import Button from "./Button";

interface Props {
  title: string;
  imgSrc: string;
}

const Card = ({ title, imgSrc }: Props) => {
  return (
    <div className="w-min-[90%] max-w-[300px] mx-auto overflow-hidden shadow-md rounded-2xl hover:scale-[1.02] duration-200">
      <Image src={imgSrc} alt={title} width={400} height={250} />
      <div className="px-8 py-6">
        <h3 className="mb-6 font-medium">{title}</h3>
        <Button variant={"outlined"} size={"base"} href="/">
          More detail
        </Button>
      </div>
    </div>
  );
};

export default Card;

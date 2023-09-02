import Image from "next/image";
import Button from "../Button";
import InteractiveCard from "./InteractiveCard";

interface Props {
  title: string;
  imgSrc: string;
}

const Card = ({ title, imgSrc }: Props) => {
  return (
    <InteractiveCard>
      <Image src={imgSrc} alt={title} width={400} height={250} />
      <div className="px-8 py-6">
        <h3 className="mb-6 font-medium">{title}</h3>
        <Button variant={"outlined"} size={"base"} href="/">
          More detail
        </Button>
      </div>
    </InteractiveCard>
  );
};

export default Card;

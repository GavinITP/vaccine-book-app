import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";

interface Props {
  title: string;
  imgSrc: string;
  onRate: Function;
  rating: number;
}

const Card = ({ title, imgSrc, onRate, rating }: Props) => {
  return (
    <InteractiveCard>
      <Image src={imgSrc} alt={title} width={400} height={250} />
      <div className="px-8 py-6">
        <h3 className="mb-6 font-medium">{title}</h3>
        <Rating
          name="hospital rating"
          value={rating}
          onClick={(e) => e.stopPropagation()}
          onChange={(e, newValue) => {
            onRate(title, newValue);
          }}
        />
      </div>
    </InteractiveCard>
  );
};

export default Card;

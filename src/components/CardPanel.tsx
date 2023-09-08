"use client";

import { HospitalType, hospitalsData } from "@/data/hospitals";
import Card from "./Card/";
import { useReducer } from "react";

interface Action {
  type: "add" | "remove";
  hospitalName: string;
  rating: number;
}

const reducer = (state: Map<string, number>, action: Action) => {
  const { type, hospitalName, rating } = action;

  switch (type) {
    case "add": {
      return new Map(state.set(hospitalName, rating));
    }
    case "remove": {
      const newState = new Map(state);
      newState.delete(hospitalName);
      return newState;
    }
    default:
      return state;
  }
};

const cardPanel = () => {
  const [state, dispatch] = useReducer(reducer, new Map<string, number>());

  return (
    <>
      <div className="grid grid-cols-3">
        {hospitalsData.map(({ title, imgSrc }: HospitalType) => (
          <Card
            title={title}
            imgSrc={imgSrc}
            rating={state.get(title) || 0}
            onRate={(title: string, rating: number) =>
              dispatch({
                type: "add",
                hospitalName: title,
                rating: rating,
              })
            }
          />
        ))}
      </div>

      <ul className="flex flex-col items-center my-16 text-lg">
        {Array.from(state.entries()).map(([hospitalName, rating]) => (
          <li
            key={hospitalName}
            onClick={() =>
              dispatch({
                type: "remove",
                hospitalName: hospitalName,
                rating: 0,
              })
            }
          >
            {hospitalName} Rating = {rating}
          </li>
        ))}
      </ul>
    </>
  );
};

export default cardPanel;

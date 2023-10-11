"use client";

import { HospitalJsonType } from "./HospitalCatalog";
import Card from "./Card/";
import { useReducer, useEffect, useState } from "react";
import Link from "next/link";

import getHospitals from "@/libs/getHospitals";

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
  const [hospitalResponse, setHospitalResponse] = useState<HospitalJsonType>();

  useEffect(() => {
    const fetchData = async () => {
      const hospitals = await getHospitals();
      setHospitalResponse(hospitals);
    };

    fetchData();
  }, []);

  if (!hospitalResponse)
    return <p className="text-center">Hospital Card Panel is loading...</p>;

  const { data } = hospitalResponse;

  return (
    <>
      <p className="mb-16 text-center font-bold text-2xl">Test Card Panel</p>
      <div className="grid grid-cols-3">
        {data.map(({ _id, name, picture }) => (
          <Link href={`/hospital/${_id}`} key={_id}>
            <Card
              title={name}
              imgSrc={picture}
              rating={state.get(name) || 0}
              onRate={(title: string, rating: number) =>
                dispatch({
                  type: "add",
                  hospitalName: title,
                  rating: rating,
                })
              }
            />
          </Link>
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

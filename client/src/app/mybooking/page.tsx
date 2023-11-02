"use client";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeBooking } from "../../redux/features/bookSlice";
import { RootState } from "@/redux/store";
import Button from "@/components/Button";

const MyBooking = () => {
  const bookItems = useSelector((state: RootState) => state.book.bookItems);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center text-center py-4">
      <h2 className="font-bold mt-24 text-5xl">My Bookings</h2>
      {!bookItems.firstName &&
      !bookItems.lastName &&
      !bookItems.citizenId &&
      !bookItems.hospital &&
      !bookItems.date ? (
        <>
          <p className="my-8 text-lg">"No Vaccine Booking"</p>
          <Button variant={"filled"} size={"lg"} href={"/booking"}>
            Booking
          </Button>
        </>
      ) : (
        <>
          <div className="mt-16 mb-12">
            <p>
              <span className="font-bold">First name : </span>
              {bookItems.firstName}
            </p>
            <p>
              <span className="font-bold">Last name : </span>
              {bookItems.lastName}
            </p>
            <p>
              <span className="font-bold">Citizen ID. : </span>
              {bookItems.citizenId}
            </p>
            <p>
              <span className="font-bold">Hospital : </span>
              {bookItems.hospital}
            </p>
            <p>
              <span className="font-bold">Date : </span> {bookItems.date}
            </p>
          </div>
          <button
            className="rounded bg-red-500 px-4 py-2 text-white"
            onClick={() => {
              dispatch(removeBooking());
            }}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default MyBooking;

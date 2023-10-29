"use client";

import { useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useDispatch } from "react-redux";
import { addBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../../../interfaces";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";

const Booking = () => {
  const [book, setBook] = useState<BookingItem>({
    firstName: "",
    lastName: "",
    citizenId: 0,
    hospital: "",
    date: "",
  });
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddBook = () => {
    if (
      !book.firstName ||
      !book.lastName ||
      !book.citizenId ||
      !book.hospital ||
      !book.date
    )
      return;
    dispatch(addBooking(book));
    router.push("/mybooking");
  };

  const handleDatePickerChange = (newDate: string | null) => {
    const date = new Date(newDate?.toString() as string);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const formattedDate = year + "-" + month + "-" + day;

    setBook({
      ...book,
      date: dayjs(formattedDate).format("MM/DD/YYYY"),
    });
  };

  return (
    <div className="mt-28 px-28">
      <h2 className="font-bold mt-12 mb-8 text-center text-5xl">Booking</h2>
      <form className="bg-white shadow-lg rounded-2xl px-10 py-14 mb-4 w-full max-w-2xl mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                placeholder="First name"
                value={book.firstName}
                onChange={(e) =>
                  setBook({ ...book, firstName: e.target.value })
                }
              />
            </FormControl>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                placeholder="Last name"
                value={book.lastName}
                onChange={(e) => setBook({ ...book, lastName: e.target.value })}
              />
            </FormControl>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="citizen-id"
            >
              Citizen ID.
            </label>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                placeholder="***************"
                value={book.citizenId || 0}
                onChange={(e) =>
                  setBook({ ...book, citizenId: parseInt(e.target.value) })
                }
              />
            </FormControl>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="hospital"
            >
              Hospital
            </label>
            <FormControl fullWidth>
              <InputLabel>Hospital</InputLabel>
              <Select
                value={book.hospital || ""}
                onChange={(e) => {
                  setBook({ ...book, hospital: e.target.value as string });
                }}
              >
                <MenuItem value="Chulalongkorn Hospital">
                  Chulalongkorn Hospital
                </MenuItem>
                <MenuItem value="Rajavithi Hospital">
                  Rajavithi Hospital
                </MenuItem>
                <MenuItem value="Thammasat University Hospital">
                  Thammasat University Hospital
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-xs font-bold mb-2"
              htmlFor="date"
            >
              Date Reservation
            </label>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker
                  value={book.date}
                  onChange={(newDate) => handleDatePickerChange(newDate)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleAddBook}
            variant="outlined"
            size="large"
            className="mt-6"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Booking;

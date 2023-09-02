"use client";

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

const Booking = () => {
  return (
    <div className="mt-28 px-28">
      <h2 className="font-bold mb-8 text-center">Booking</h2>

      <form className="bg-white shadow-lg rounded-2xl px-10 py-14 mb-4 w-full max-w-2xl mx-auto">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <FormControl fullWidth>
              <TextField variant="outlined" placeholder="First name" />
            </FormControl>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <FormControl fullWidth>
              <TextField variant="outlined" placeholder="Last name" />
            </FormControl>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide  text-xs font-bold mb-2"
              htmlFor="citizen-id"
            >
              Citizen ID.
            </label>
            <FormControl fullWidth>
              <TextField variant="outlined" placeholder="***************" />
            </FormControl>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide  text-xs font-bold mb-2">
              Hospital
            </label>
            <FormControl fullWidth>
              <InputLabel>Hospital</InputLabel>
              <Select>
                <MenuItem>Chulalongkorn Hospital</MenuItem>
                <MenuItem>Rajavithi Hospital</MenuItem>
                <MenuItem>Thammasat University Hospital</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide  text-xs font-bold mb-2">
              Date Reservation
            </label>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker"]}>
                <DateTimePicker />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>

        <div className="flex justify-center">
          <Button variant="outlined" size="large" className="mt-6">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Booking;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BookingItem } from "../../../interfaces";

interface bookState {
  bookItems: BookingItem;
}

const initialState: bookState = {
  bookItems: {
    firstName: "",
    lastName: "",
    citizenId: 0,
    hospital: "",
    date: "",
  },
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<BookingItem>) => {
      const { firstName, lastName, citizenId, hospital, date } = action.payload;
      state.bookItems = { firstName, lastName, citizenId, hospital, date };
    },
    removeBooking: (state) => {
      state.bookItems = {
        firstName: "",
        lastName: "",
        citizenId: 0,
        hospital: "",
        date: "",
      };
    },
  },
});

export const { addBooking, removeBooking } = bookSlice.actions;
export default bookSlice.reducer;

// dashboardReducer.ts
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: JSON.parse(localStorage.getItem("enrollments") || "[]"),
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, action) => {
      state.enrollments.push(action.payload);
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments)); // Persist to localStorage
    },
    deleteEnrollment: (state, action) => {
      state.enrollments = state.enrollments.filter(
        (enrollment: { _id: any; }) => enrollment._id !== action.payload
      );
      localStorage.setItem("enrollments", JSON.stringify(state.enrollments)); // Persist to localStorage
    },
  },
});

export const { addEnrollment, deleteEnrollment } = enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;

"use client"

import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../api/data";

const initialState = {
  data: []
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: { increase: (state) => { state.counter++ } },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
    })
  }
});

const dataReducer = dataSlice.reducer
export default dataReducer
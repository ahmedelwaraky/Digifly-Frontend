import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get("http://localhost:1337/user-informations");
  return response.data;
});

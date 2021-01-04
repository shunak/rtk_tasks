import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:8000/api/tasks";
const token = localStorage.localJWT;

const taskSlice = createSlice({
  name: "task",
  initialState: {},
});

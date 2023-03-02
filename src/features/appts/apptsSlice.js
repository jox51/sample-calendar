import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  loading: true
}

const apptsSlice = createSlice({
  name: "appts",
  initialState
})

export default apptsSlice.reducer

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  loading: true
}

const swapsSlice = createSlice({
  name: "swaps",
  initialState
})

export default swapsSlice.reducer

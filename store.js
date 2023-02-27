import { configureStore } from "@reduxjs/toolkit"

import swapsSlice from "./src/features/swaps/swapsSlice"

export const store = configureStore({
  reducer: {
    swaps: swapsSlice
  }
})

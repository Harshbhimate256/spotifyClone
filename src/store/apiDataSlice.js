import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  apidata: [],
};

const apiDataSlice = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    setApiData: (state, action) => {
      state.apidata = action.payload;
    },
  },
});

export const { setApiData } = apiDataSlice.actions;
<<<<<<< HEAD
export default apiDataSlice.reducer;
=======
export default apiDataSlice.reducer;

export const apiDataReducer = apiDataSlice.reducer;
>>>>>>> c7b1c2914353032764855008f02c8a21e5df27a1

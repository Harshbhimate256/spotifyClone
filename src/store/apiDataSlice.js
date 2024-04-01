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
export default apiDataSlice.reducer;
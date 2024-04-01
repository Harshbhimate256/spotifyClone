import { configureStore } from "@reduxjs/toolkit";
import { apiDataReducer } from "./apiDataSlice";

const store = configureStore({
  reducer: {
    apiData: apiDataReducer,
  },
});
<<<<<<< HEAD

=======
>>>>>>> c7b1c2914353032764855008f02c8a21e5df27a1
export default store;
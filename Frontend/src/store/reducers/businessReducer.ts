import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  businessList: { status: "", business: [] },
  dialog: { status: false, message: "" },
  message: { status: false, body: "" },
};

export const Businesslice = createSlice({
  name: "business",
  initialState,
  reducers: {
    fetchBusinessListList: () => {},
    updateBusinessList: (state, action) => {
      state.businessList = action.payload;
    },
    setDialog: (state, action) => {
      state.dialog = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
   
  },
});
export const {
  setDialog,
  fetchBusinessListList,
  updateBusinessList,
  setMessage,
  
} = Businesslice.actions;
export default Businesslice.reducer;

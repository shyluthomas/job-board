import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  businessList: { status: "", business: [] },
  businessLocation: { status: "", location: [] },
  businessClassification: { status: "", classification: [] },

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
    fetchBusinessLocation: () => {},
    updateBusinessLocation: (state, action) => {
      state.businessLocation = action.payload;
    },
    fetchBusinessClassification: () => {},
    updatebusinessClassification: (state, action) => {
      state.businessClassification = action.payload;
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
  fetchBusinessLocation,
  updateBusinessLocation,
  fetchBusinessClassification,
  updatebusinessClassification
  
} = Businesslice.actions;
export default Businesslice.reducer;

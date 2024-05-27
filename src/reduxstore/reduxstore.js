import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  showLoginModal: false,
};

const arrayStoreFunction = createSlice({
  name: "arrayStore",
  initialState,
  reducers: {
    loginCheckerFun: (state, action) => {
      console.log(action.payload);
      state.showLoginModal = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    arrayStore: arrayStoreFunction.reducer,
  },
});

export const arrayReduxBtn = arrayStoreFunction.actions;
export default store;

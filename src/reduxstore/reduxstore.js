import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  showLoginModal: false,
  totalAmountOfCart :0,
  totalCartItemUser: [],
  orderHistory: [],
};

const arrayStoreFunction = createSlice({
  name: "arrayStore",
  initialState,
  reducers: {
    loginCheckerFun: (state, action) => {
      console.log(action.payload);
      
      state.showLoginModal = action.payload;
    },

    totalCartItemFunction   : (state, action) => {
      state.totalCartItemUser = action.payload;
    },
    removeItemHandlerFrondom : (state, action) => {
      state.totalCartItemUser = [];
    },

    totalAmountCalculation : (state, action) => {
      state.totalAmountOfCart = action.payload;
    },

    orderHandlerRemoveFromDom: (state, action) => {
      state.orderHistory = action.payload;
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

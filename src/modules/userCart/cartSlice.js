const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  product: [],
  totalQuantity: 0,
  totalPrice: 0,
  isSynced: true,
};

const cartSLice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {},
    removeProduct(state, action) {},
    updateQuantity(state, action) {},
    resetCart(state) {
      state.product = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
      state.isSynced = true;
    },
    markSynced(state) {
      state.isSynced = true;
    },
  },
});

export const {
  addProduct,
  removeProduct,
  updateQuantity,
  resetCart,
  markSynced,
} = cartSLice.actions;

export default cartSLice.reducer;

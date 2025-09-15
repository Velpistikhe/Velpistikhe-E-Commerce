import { createAsyncThunk } from "@reduxjs/toolkit";

const getErrorMessage = (error) => {
  return (
    error.response?.data?.message ||
    error.message ||
    error ||
    "Internal Server Error"
  );
};

export const syncCart = createAsyncThunk(
  "cart/syncCart",
  async (_, { getState, dispatch, rejectWithValue }) => {
    const { cart } = getState();

    if (cart.isSynced || cart.item.length === 0) {
      return "Already synced or empty cart";
    }

    try {
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

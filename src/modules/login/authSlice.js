import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/axios";

const initialState = {
  user: null,
  loadingFetch: true,
  loadingLogin: false,
  loadingLogout: false,
  error: null,
  message: null,
};

const getErrorMessage = (error) => {
  return (
    error.response?.data?.message ||
    error.message ||
    error ||
    "Internal Server Error"
  );
};

export const fetchProfile = createAsyncThunk(
  "auth/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.get("user/profile");

      return data.user || null;
    } catch (error) {
      if (error.name === "CanceledError" || error.code === "ERR_CANCELED") {
        return;
      }

      if (error?.response?.status === 401) return null;

      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await api.post("user/login", credentials);

      await dispatch(fetchProfile()).unwrap();

      return data.message || "Berhasil Login";
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const { data } = await api.post("user/logout");

      return data.message || "Berhasil Logout";
    } catch (error) {
      return rejectWithValue(getErrorMessage(error));
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearAuthMessage(state) {
      state.error = null;
      state.message = null;
    },
    resetAuth: () => initialState,
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loadingFetch = true;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loadingFetch = false;
        state.isAuthChecked = true;
        state.user = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loadingFetch = false;
        state.error = action.payload;
        state.isAuthChecked = true;
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.loadingLogin = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loadingLogin = false;
        state.message = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loadingLogin = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.loadingLogout = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.loadingLogout = false;
        state.user = null;
        state.message = action.payload;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loadingLogout = false;
        state.error = action.payload;
      });
  },
});

export const { clearAuthMessage, resetAuth } = authSlice.actions;

export default authSlice.reducer;

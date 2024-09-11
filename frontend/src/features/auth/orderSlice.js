import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "../../services/orderService";

const initialState = {
  loading: false,
  hasMore: false,
  error: null,
  message: "",
  orderData: [],
};

export const getOrder = createAsyncThunk(
  "order/getOrder",
  async (_, thunkAPI) => {
    try {
      console.log("getOrder thunk called");
      const state = thunkAPI.getState();
      const user = state.auth.user;
      return await orderService.getOrder(user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      // returns error message with the help of async thunkAPI
      // it can be used in extraReducers function by addCase.
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addOrder = createAsyncThunk(
  "order/addOrder",
  async (orderData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const user = state.auth.user;
      return await orderService.addOrder(orderData, user);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      // returns error message with the help of async thunkAPI
      // it can be used in extraReducers function by addCase.
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.hasMore = false;
      state.error = null;
      state.orderData = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.orderData = [...action.payload];
        state.hasMore = action.payload.length > 0;
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addOrder.pending, (state) => {
        state.loading = true;
        state.message = "";
      })
      .addCase(addOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.message = "Order created successfully";
      })
      .addCase(addOrder.rejected, (state, action) => {
        state.message = "";
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { reset } = orderSlice.actions;
export default orderSlice.reducer;

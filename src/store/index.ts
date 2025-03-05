import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';

// Define the shape of selectedSeats
interface SeatState {
  selectedSeats: Record<string, number>; // Keys are ticketClassId (string), values are seat count
  totalPrice: number;
}

// Define initial state
const initialState: SeatState = {
  selectedSeats: {},
  totalPrice: 0,
};

// Create a slice for seat selection
const seatSlice = createSlice({
  name: 'seats',
  initialState,
  reducers: {
    incrementSeat: (state, action: PayloadAction<{ticketClassId: string; price: number}>) => {
      const {ticketClassId, price} = action.payload;
      if (!state.selectedSeats[ticketClassId]) {
        state.selectedSeats[ticketClassId] = 0;
      }
      state.selectedSeats[ticketClassId] += 1;
      state.totalPrice += price;
    },
    decrementSeat: (state, action: PayloadAction<{ticketClassId: string; price: number}>) => {
      const {ticketClassId, price} = action.payload;
      if (state.selectedSeats[ticketClassId] && state.selectedSeats[ticketClassId] > 0) {
        state.selectedSeats[ticketClassId] -= 1;
        state.totalPrice -= price;
      }
    },
  },
});

// Export actions
export const {incrementSeat, decrementSeat} = seatSlice.actions;

// Configure store
export const store = configureStore({
  reducer: {
    seats: seatSlice.reducer,
  },
});

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

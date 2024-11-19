import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type CounterState = {
    counter: number;
    showCounter: boolean;
  };

const initialCounterState: CounterState = { counter: 0, showCounter: true };


const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
      increment: (state) => {
        state.counter++;
      },
      increaseByAmount(state, action: PayloadAction<{ amount: number }>) {
        state.counter = state.counter + action.payload.amount;
      },
      decrement(state) {
        state.counter--;
      },
      showCounter(state) {
        state.showCounter = !state.showCounter;
      },
    },
  });

  export const {increment, decrement, showCounter, increaseByAmount} = counterSlice.actions;

  export default counterSlice.reducer;
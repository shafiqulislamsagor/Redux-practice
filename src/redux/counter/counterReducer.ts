// counterReducer.ts
import { DECREMENT, INCREMENT } from "./actionType";

// Define the types for the state and actions
export interface CounterState {
  value: number;
}

export interface IncrementAction {
  type: typeof INCREMENT;
  payload: number;
}

export interface DecrementAction {
  type: typeof DECREMENT;
  payload: number;
}

type CounterActionTypes = IncrementAction | DecrementAction;

const initialState: CounterState = {
  value: 0,
};

const counterReducer = (
  state = initialState,
  action: CounterActionTypes
): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };
    default:
      return state;
  }
};

export default counterReducer;

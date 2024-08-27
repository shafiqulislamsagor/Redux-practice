import { createStore } from "redux";
import counterReducer from "./counter/counterReducer";

// Create the Redux store
const store = createStore(counterReducer);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

export type AppDispatch = typeof store.dispatch;

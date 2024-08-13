import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from "./features/loadingSlice"
import recipeReducer from "./features/recipeSlice"
import favouriteReducer from "./features/favouriteSlice"

export const store = configureStore({
  reducer: {
    loadingReducer,
    recipeReducer,
    favouriteReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
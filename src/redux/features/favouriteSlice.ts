import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipeType } from "../../pages/Recipe";

const initialState: Array<RecipeType> = []

export const favouriteSlice = createSlice({
    name: 'favouriteSlice',
    initialState,
    reducers: {
        setFavourite: (state, action: PayloadAction<RecipeType>) => {
            let index = state.findIndex(item => item.id === action.payload.id);
            if ((index) === -1) {
                state.push(action.payload)
            } else {
                state.splice(index)
            }
        }
    }
})

export const {setFavourite} = favouriteSlice.actions;
export default favouriteSlice.reducer;
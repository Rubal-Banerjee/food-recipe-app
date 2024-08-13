import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IRecipe {
    id: string;
    publisher: string;
    image_url: string;
    title: string;
}

const initialState: Array<IRecipe> = [];

export const recipeSlice = createSlice({
    name: "recipeSlice",
    initialState,
    reducers: {
        setRecipe: (_, action: PayloadAction<Array<IRecipe>>) => {
            return action.payload;
        }
    }
})

export const {setRecipe} = recipeSlice.actions;
export default recipeSlice.reducer;
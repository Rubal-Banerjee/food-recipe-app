import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setLoading } from "../redux/features/loadingSlice";
import axios from "axios";
import { setFavourite } from "../redux/features/favouriteSlice";
import makeToast from "../utils/helper";

export interface IngredientsType {
    quantity: null | string;
    unit: null | string;
    description: string;
}

export interface RecipeType {
    id: string;
    publisher: string;
    ingredients: Array<IngredientsType>;
    source_url: string;
    image_url: string;
    title: string;
    servings: number;
    cooking_time: number;
}

export default function Recipe() {
    const params = useParams();
    const [recipe, setRecipe] = useState<RecipeType>();
    const dispatch = useAppDispatch();
    const favourite = useAppSelector((state) => state.favouriteReducer);

    useEffect(() => {
        dispatch(setLoading(true))
        axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes/${params.id}`).then((response) => {
            {response.data.data.recipe && setRecipe(response.data.data.recipe)}
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            dispatch(setLoading(false))
        })
    }, [])

    return <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="row-start-2 lg:row-start-auto">
            <div className="h-96 overflow-hidden rounded-xl group">
                <img src={recipe?.image_url} className="w-full h-full object-cover block group-hover:scale-105 duration-300" />
            </div>
        </div>
        <div className="flex flex-col gap-3">
            <span className="text-sm text-cyan-700 font-medium">{recipe?.publisher}</span>
            <h3 className="font-bold text-2xl truncate text-indigo-700">{recipe?.title}</h3>
            <div>
                <button onClick={() => {
                    dispatch(setFavourite(recipe!))
                    {
                        (favourite.findIndex(item => item.id === recipe?.id) === -1) ? 
                        makeToast("Added to Favourites") : makeToast("Removed from Favourites")
                    }
                }} className="p-3 px-8 rounded-lg font-medium text-sm uppercase tracking-wider mt-3 inline-block shadow-md bg-red-500 hover:bg-red-700 text-white"
                >{
                    (favourite.findIndex(item => item.id === recipe?.id) === -1) ? 
                    'Add to Favourites' : 'Remove from Favourites'
                }</button>
            </div>
            <span className="text-2xl font-semibold text-indigo-500">Ingredients:</span>
            <ul>
                {
                    recipe?.ingredients.map((ingredient, index) => <li key={index}>
                        <span className="text-2xl font-serif text-blue-500">{ingredient.quantity} {ingredient.unit} </span>
                        <span className="text-2xl font-serif text-blue-500">{ingredient.description}</span>
                    </li>)
                }
            </ul>
        </div>
    </div>
}
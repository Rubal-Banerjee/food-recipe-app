import { Link } from "react-router-dom";
import { IRecipe } from "../redux/features/recipeSlice";

interface PropsType {
    item: IRecipe;
}

export default function RecipeItem({item}: PropsType) {
    return <div className="flex flex-col gap-5 w-80 overflow-hidden p-5 bg-white/75 shadow-xl rounded-2xl border-2 border-white">
        <div className="h-40 justify-center overflow-hidden items-center rounded-xl">
            <img src={item?.image_url} alt="recipe item" className="block w-full" />
        </div>
        <div>
            <span className="text-sm text-cyan-700 font-medium">{item?.publisher}</span>
            <h3 className="font-bold text-2xl truncate text-black">{item?.title}</h3>
            <Link to={`/recipe/${item?.id}`} 
            className="text-sm p-3 px-8 rounded-lg uppercase font-medium tracking-wider mt-5 inline-block shadow-md bg-red-500 hover:bg-red-700 text-white text-center">Recipe Details</Link>
        </div>
    </div>
}
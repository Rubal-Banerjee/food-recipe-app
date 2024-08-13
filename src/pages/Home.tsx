import RecipeItem from "../components/RecipeItem";
import { useAppSelector } from "../redux/hooks"

export default function Home() {
    const recipes = useAppSelector((state) => state.recipeReducer);

    return <div className="container flex flex-wrap justify-center gap-10 py-8 mx-auto">
        {
        recipes && recipes.length > 0 ? 
        recipes.map(item => (<RecipeItem key={item.id} item={item} />)) : 
        <div>
            <p className="lg:text-4xl text-xl text-center text-red-500 font-extrabold">Search for Mouth Watering Recipes...</p>
        </div>
        }
    </div>
}
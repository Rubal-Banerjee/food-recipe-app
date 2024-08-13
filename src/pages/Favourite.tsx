import RecipeItem from "../components/RecipeItem";
import { useAppSelector } from "../redux/hooks"

export default function Home() {
    const favourites = useAppSelector((state) => state.favouriteReducer);

    return <div className="container flex flex-wrap justify-center gap-10 py-8 mx-auto">
        {
        favourites && favourites.length > 0 ? 
        favourites.map(item => (<RecipeItem key={item.id} item={item} />)) : 
        <div>
            <p className="lg:text-4xl text-xl text-center text-red-500 font-extrabold">Nothing is added to favourites...</p>
        </div>
        }
    </div>
}
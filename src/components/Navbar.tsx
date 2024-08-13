import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Navbar() {
    return <nav className="flex justify-between items-center py-8 mx-auto container flex-col lg:flex-row gap-5 lg:gap-0">
        <h2 className="text-2xl text-red-600 font-semibold">
            <NavLink to={"/"} className="flex justify-between items-center">
                <img className="w-20 h-20" src="/mom's-recipe.png" />
                <div>Mom's Recipes</div>
            </NavLink>
        </h2>
        <SearchBar />
        <ul className="flex gap-5">
            <li>
                <NavLink to={"/"} className="text-blue-500 hover:text-blue-700 duration-300">Home</NavLink>
            </li>
            <li>
                <NavLink to={"/favourite"} className="text-blue-500 hover:text-blue-700 duration-300">Favourites</NavLink>
            </li>
        </ul>
    </nav>
}
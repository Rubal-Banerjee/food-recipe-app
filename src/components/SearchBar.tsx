import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form"
import { useAppDispatch } from "../redux/hooks";
import { setLoading } from "../redux/features/loadingSlice";
import { setRecipe } from "../redux/features/recipeSlice";
import { useNavigate } from "react-router-dom";

interface SearchType {
    searchValue: string;
}

export default function SearchBar() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const {register, handleSubmit} = useForm<SearchType>({
        defaultValues: {
            searchValue: ''
        }
    });

    const onSubmit: SubmitHandler<SearchType> = async (data) => {
        try {
            dispatch(setLoading(true))
            const response = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${data.searchValue}`);
            {response.data.data.recipes && dispatch(setRecipe(response.data.data.recipes))}
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setLoading(false))
            navigate('/')
        }
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("searchValue")} className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        type="text" placeholder="Search Here..." />
    </form>
}
import axios from "axios";
import { toast } from "react-toastify";


export const getProducts = async () => {
    const url = process.env.NEXT_PUBLIC_API_URL + "api/product";
    try{
        const data = await axios.get(url);
        return data
    }
    catch(error){
        toast.error(error.message)
    }
}
import axios from "axios"

const BaseURL = "https://api.escuelajs.co/api/v1";

const getProductById = async (id) => {

    const url = `${BaseURL}/products/${id}`
    
    try{
        const { data } = await axios.get(url);
        console.log({data})
        return data
    }catch(error){
        return error
    }
}

export default getProductById